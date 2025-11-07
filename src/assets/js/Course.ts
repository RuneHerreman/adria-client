export interface Course {
    id: number,
    name: string,
    description: string,
    duration: number,
    learnList: string[],
    level: string,
    modules: number[],
    pointsOnCompletion: number,
    tags: string[],
}