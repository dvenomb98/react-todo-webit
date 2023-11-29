import { ITodo } from '@/lib/types/todo'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TodoState {
    todos: ITodo[]
}
const initialState: TodoState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setInitialTodos: (state, action: PayloadAction<ITodo[]>) => {
            state.todos = action.payload
        },
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const newTodos = state.todos.filter((todo) => todo.id !== action.payload)
            state.todos = newTodos
        },
        updateTodo: (state, action: PayloadAction<ITodo>) => {
            const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
            updatedTodos.push(action.payload)
            state.todos = updatedTodos
        },
    },
})

export const { addTodo, deleteTodo, updateTodo, setInitialTodos } = todoSlice.actions
export default todoSlice.reducer
