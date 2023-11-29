import { ITodo } from "@/lib/types/todo"

export interface ITodoItemProps {
    todo: ITodo
    openUpdate: (id: string) => void
}