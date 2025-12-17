import {test, expect, describe, beforeEach, vi} from 'vitest'
import * as API from '@/assets/js/data-connector/api'
import * as APICOMM from "@/assets/js/data-connector/api-communication-abstractor"
import * as ErrorHandler from "@/assets/js/data-connector/error-handler"

beforeEach(()=>{
    vi.clearAllMocks();
})

describe("Level translations", ()=>{
    test("multiple levels gets correcly translated", ()=>{
        const courses = [
            {level: 0},
            {level: 1},
            {level: 2},
            {level: 3},
            {level: 4}
        ];

        const result = API.translateCourseLevels(courses)
            .map(c => c.level);

        expect(result).toEqual(
            expect.arrayContaining(["easy", "moderate", "hard", "expert", "unknown"])
        )
    });

    test("one course gets correcly translated", ()=>{
        const course = {level: 0};
        const result = API.translateCourseLevel(course).level

        expect(result).toEqual("easy");
    })
})

describe("API calls", () => {
    describe("Subscription tests", ()=>{
        test("getAllSubscriptions fetches subscriptions", async () => {
            const mockdata = [
                {
                    "subscriptionId": "26d25a2b-970c-4428-b224-438d5b1584a5",
                    "name": "Standard",
                    "price": 18.99,
                    "description": [
                        "Access to most courses with standard features"
                    ],
                    "isMostPopular": false
                },
                {
                    "subscriptionId": "5e04b02d-eac7-42c0-b877-9ecbc695cec2",
                    "name": "Ultimate",
                    "price": 32.99,
                    "description": [
                        "Everything in Premium plus exclusive masterclasses and personal learning assistant"
                    ],
                    "isMostPopular": false
                }
            ];

            vi.spyOn(APICOMM, "fetchFromServer").mockResolvedValue(mockdata);

            const result = await API.getAllSubscriptions();

            expect(APICOMM.fetchFromServer).toHaveBeenCalledWith('/api/subscriptions/all-subscriptions');

            expect(result).toEqual(mockdata);
            expect(result).toHaveLength(2);
            expect(result[0].name).toBe('Standard');
        })
        test("getAllSubscriptions handles errors", async () => {
            const error = new Error('Network fail')
            vi.spyOn(APICOMM, 'fetchFromServer').mockRejectedValue(error)
            vi.spyOn(ErrorHandler, 'handleError').mockImplementation(() => {})

            await API.getAllSubscriptions().catch(() => {})

            expect(ErrorHandler.handleError).toHaveBeenCalledWith(error);
        })
    })
    describe("User tests", ()=>{
        test("getUserDetails fetches user by ID", async () => {
            const mockUser = {
                "adriaId": "389bc6fb-080e-4450-ac9a-2ff10868b0d6",
                "userName": "Simon Cornelissis",
                "wallet": 125.5,
                "pointsBalance": 350,
                "streak": 7,
                "subscription": {
                    "subscriptionId": "eebfa304-3e1f-4a75-9d0d-d147b78c735f",
                    "name": "Premium",
                    "price": 24.99,
                    "description": [
                        "Full access to all courses",
                        "priority support",
                        "and bonus content"
                    ],
                    "isMostPopular": true
                },
                "occupation": "",
                "profilePicture": ""
            };

            vi.spyOn(APICOMM, "fetchFromServer").mockResolvedValue(mockUser);

            const result = await API.getUserDetails("389bc6fb-080e-4450-ac9a-2ff10868b0d6");
            expect(APICOMM.fetchFromServer).toHaveBeenCalledWith('/api/users/389bc6fb-080e-4450-ac9a-2ff10868b0d6')
            expect(result).toEqual(mockUser)
        })
        test("getUsersInLeaderboard fetches leaderboard", async () => {
            const mockdata = [
                {
                    "name": "Mathieu Paggy Pinsart",
                    "pointsBalance": 520
                },
                {
                    "name": "Frederic Vlummens",
                    "pointsBalance": 500
                },
                {
                    "name": "Simon Cornelissis",
                    "pointsBalance": 350
                },
                {
                    "name": "Kris Moltisanti",
                    "pointsBalance": 320
                },
                {
                    "name": "Floris Delahaye",
                    "pointsBalance": 260
                },
                {
                    "name": "Dieter Mourisse",
                    "pointsBalance": 210
                },
                {
                    "name": "Sterling Archer",
                    "pointsBalance": 180
                },
                {
                    "name": "Antonio Soprano",
                    "pointsBalance": 135
                },
                {
                    "name": "Ann Audenaert",
                    "pointsBalance": 95
                },
                {
                    "name": "Mattias De Wael",
                    "pointsBalance": 80
                }
            ]
            vi.spyOn(APICOMM, 'fetchFromServer').mockResolvedValue(mockdata)

            const result = await API.getUsersInLeaderboard();

            expect(APICOMM.fetchFromServer).toHaveBeenCalledWith('/api/users/leaderboard');
            expect(result).toEqual(mockdata);
        })
        test('enrollUser posts enrollment', async () => {
            vi.spyOn(APICOMM, 'fetchFromServer').mockResolvedValue({ success: true })

            await API.enrollUser("308934f3-03ea-46f4-97df-b6cbbbf52cc3", "308934f3-03ea-46f4-97df-b6cbbbf52cc3")

            expect(APICOMM.fetchFromServer)
                .toHaveBeenCalledWith('/api/users/308934f3-03ea-46f4-97df-b6cbbbf52cc3/enroll/308934f3-03ea-46f4-97df-b6cbbbf52cc3', 'POST')
        })
        test('changeOccupation posts new occupation', async () => {
            vi.spyOn(APICOMM, 'fetchFromServer').mockResolvedValue({})

            await API.changeOccupation(10, 'Engineer')

            expect(APICOMM.fetchFromServer).toHaveBeenCalledWith(
                '/api/users/10/occupation/Engineer',
                'POST'
            )
        })
        test('updateProfilePicture posts image string', async () => {
            vi.spyOn(APICOMM, 'fetchFromServer').mockResolvedValue({})

            await API.updateProfilePicture(10, 'base64string')

            expect(APICOMM.fetchFromServer).toHaveBeenCalledWith(
                '/api/users/10/profilePicture',
                'POST',
                { profilePicture: 'base64string' }
            )
        })
        test('deleteProfilePicture sends DELETE request', async () => {
            vi.spyOn(APICOMM, 'fetchFromServer').mockResolvedValue({})

            await API.deleteProfilePicture(10)

            expect(APICOMM.fetchFromServer).toHaveBeenCalledWith(
                '/api/users/10/profilePicture',
                'DELETE'
            )
        })
    })
    describe("Course tests", ()=>{
        test('getCourses fetches and translates levels', async () => {
            const mockCourses = [
                {
                    "id": "0819e979-a9ba-42b6-a55f-cbe08427b821",
                    "name": "Psych 101",
                    "level": 2,
                    "description": "Introduction to human psychology and mental health awareness.",
                    "category": "Science",

                },
                {
                    "id": "308934f3-03ea-46f4-97df-b6cbbbf52cc3",
                    "name": "Cleaning 101",
                    "level": 1,
                    "description": "Hygiene and sanitation practices for healthy living environments.",
                    "category": "Life Skills"
                }
            ];
            vi.spyOn(APICOMM, 'fetchFromServer').mockResolvedValue(mockCourses)

            const result = await API.getCourses()

            expect(APICOMM.fetchFromServer).toHaveBeenCalledWith('/api/courses')
            expect(result[0].level).toBe('hard')
            expect(result[1].level).toBe('moderate')
        })
        test('getCoursesByCategory filters by category', async () => {
            const mockCourses = [
                {
                    "id": "0819e979-a9ba-42b6-a55f-cbe08427b821",
                    "name": "Psych 101",
                    "level": 2,
                    "description": "Introduction to human psychology and mental health awareness.",
                    "category": "Life Skills",

                },
                {
                    "id": "308934f3-03ea-46f4-97df-b6cbbbf52cc3",
                    "name": "Cleaning 101",
                    "level": 1,
                    "description": "Hygiene and sanitation practices for healthy living environments.",
                    "category": "Life Skills"
                }
            ];
            vi.spyOn(APICOMM, 'fetchFromServer').mockResolvedValue(mockCourses)

            const result = await API.getCoursesByCategory('Life Skills')

            expect(APICOMM.fetchFromServer).toHaveBeenCalledWith('/api/courses?category=Life Skills', 'GET')
            expect(result[0].level).toBe('hard')
        })
        test('getCourseByID fetches single course', async () => {
            const mockCourse = {
                "id": "0819e979-a9ba-42b6-a55f-cbe08427b821",
                "name": "Psych 101",
                "level": 3,
                "description": "Introduction to human psychology and mental health awareness.",
                "category": "Life Skills",

            };
            vi.spyOn(APICOMM, 'fetchFromServer').mockResolvedValue(mockCourse)

            const result = await API.getCourseByID("0819e979-a9ba-42b6-a55f-cbe08427b821")

            expect(APICOMM.fetchFromServer).toHaveBeenCalledWith('/api/courses/0819e979-a9ba-42b6-a55f-cbe08427b821')
            expect(result.level).toBe('expert')
        })
        test('getUserCourses filters completed courses', async () => {
            const mockCourses = [
                {
                    "courseId": "fe14820b-a8a0-4a90-917e-a02710bc51b3",
                    "courseName": "Salsa and cha-cha",
                    "level": 1,
                    "completionStatus": false,
                    "progressPercentage": 100
                },
                {
                    "courseId": "308934f3-03ea-46f4-97df-b6cbbbf52cc3",
                    "courseName": "Cleaning 101",
                    "level": 1,
                    "completionStatus": false,
                    "progressPercentage": 50
                }
            ];
            vi.spyOn(APICOMM, 'fetchFromServer').mockResolvedValue(mockCourses)

            const result = await API.getUserCourses("389bc6fb-080e-4450-ac9a-2ff10868b0d6")

            expect(result).toHaveLength(1)
            expect(result[0].progressPercentage).toBe(50)
        })
        test('getUserCourses returns empty array on error', async () => {
            vi.spyOn(APICOMM, 'fetchFromServer').mockRejectedValue(new Error('fail'))
            vi.spyOn(console, 'log').mockImplementation(() => {})

            const result = await API.getUserCourses(10)

            expect(result).toEqual([])
        })
        test('removeUserCoursesFromList filters enrolled courses', async () => {
            const allCourses = [{ id: 1 }, { id: 2 }, { id: 3 }]
            const userCourses = [{ courseId: 2, progressPercentage: 50 }]

            vi.spyOn(APICOMM, 'fetchFromServer').mockResolvedValue(userCourses)

            const result = await API.removeUserCoursesFromList(allCourses, "389bc6fb-080e-4450-ac9a-2ff10868b0d6")

            expect(result).toHaveLength(2)
            expect(result.find(c => c.id === 2)).toBeUndefined()
        })
    })
})