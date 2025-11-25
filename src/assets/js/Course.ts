export interface Course {
    id: number,
    name: string,
    description: string,
    duration: number,
    learnList: string[],
    level: string,
    coverImage: string,
    bannerImage: string,
    pointsOnCompletion: number,
    tags: string[],
}