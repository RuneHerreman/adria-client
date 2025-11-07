export interface Course {
    id: number,
    name: string,
    description: string,
    duration: number,
    learnList: string[],
    level: number,
    modules: number[],
    pointsOnCompletion: number,
    tags: string[],
}