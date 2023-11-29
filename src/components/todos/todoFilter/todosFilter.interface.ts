import { EProgress } from "@/lib/types/todo";

export interface ITodosFilterProps {
    value: EProgress | null
    onChange: (value: EProgress | null) => void
}