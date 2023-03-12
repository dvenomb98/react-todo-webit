import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from '@/redux/theme/theme.slice'

export const rootReducer = combineReducers({
    theme: themeReducer,
})

export type RootState = ReturnType<typeof rootReducer>
