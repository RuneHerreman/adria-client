export interface Course {
    id: number;
    name: string;
    description: string;
    category: string;
    duration: number;
    level: string;
    modules: number[];
    pointsOnCompletion: number;
}