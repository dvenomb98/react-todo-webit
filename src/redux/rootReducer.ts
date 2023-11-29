import { combineReducers } from '@reduxjs/toolkit'
import todoReducer from "@/redux/slices/todoSlice"

export const rootReducer = combineReducers({
    todos: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

