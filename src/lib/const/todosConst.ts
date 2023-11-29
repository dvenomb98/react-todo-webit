import { EProgress } from "@/lib/types/todo";

export const progressOptions = [
    { value: EProgress.NOT_STARTED, label: 'Not started' },
    { value: EProgress.IN_PROGRESS, label: 'In progress' },
    { value: EProgress.COMPLETED, label: 'Completed' },
]