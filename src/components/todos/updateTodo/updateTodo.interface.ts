import { DrawerProps } from "@mui/material"

export interface IUpdateTodo extends DrawerProps {
    isOpen: boolean
    toggle: () => void
    todoId: string | null
}