export enum EProgress {
    NOT_STARTED = "NOT_STARTED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"

}

export interface ITodo {
    id: string;
    name: string;
    description: string;
    time: string
    progress: EProgress
}