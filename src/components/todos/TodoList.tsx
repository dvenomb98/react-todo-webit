import { RootState, useAppSelector } from '@/redux/store'
import { Stack } from '@mui/material'
import { FC, useMemo, useState } from 'react'
import TodoListEmpty from './TodoListEmpty'
import TodoItem from './todoItem/TodoItem'
import UpdateTodo from './updateTodo/UpdateTodo'
import { EProgress } from '@/lib/types/todo'
import TodosFilter from './todoFilter/TodosFilter'

const TodoList: FC = () => {
    const todos = useAppSelector((state: RootState) => state.todos.todos)
    const [todoToUpdate, setTodoToUpdate] = useState<string | null>(null)
    const [filter, setFilter] = useState<EProgress | null>(null)

    const filteredAndSortedTodos = useMemo(() => {
        const sortedTodos = [...todos].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
        if (!filter) return sortedTodos
        return sortedTodos.filter((todo) => todo.progress === filter)
    }, [filter, todos])

    if (!todos.length) return <TodoListEmpty />

    return (
        <>
            <Stack spacing={6}>
                <TodosFilter value={filter} onChange={(value: EProgress | null) => setFilter(value)} />
                <Stack spacing={4}>
                    {!filteredAndSortedTodos.length ? (
                        <TodoListEmpty isFiltered />
                    ) : (
                        filteredAndSortedTodos.map((todo) => (
                            <TodoItem openUpdate={(id: string) => setTodoToUpdate(id)} todo={todo} key={todo.id} />
                        ))
                    )}
                </Stack>
            </Stack>
            <UpdateTodo isOpen={!!todoToUpdate} toggle={() => setTodoToUpdate(null)} todoId={todoToUpdate} />
        </>
    )
}

export default TodoList
