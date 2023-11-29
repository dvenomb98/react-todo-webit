import TodoSkeletons from '@/components/skeletons/TodoSkeletons'
import AddTodoForm from '@/components/todos/AddTodoForm'
import TodoList from '@/components/todos/TodoList'
import useInitialTodos from '@/hooks/useInitialTodos'
import { Alert, Container } from '@mui/material'
import { FC } from 'react'

export const Dashboard: FC = () => {
    const { error, loading } = useInitialTodos()

    return (
        <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: 5, py: 5 }}>
            <h1>Dashboard</h1>
            {error ? (
                <Alert color="error">Sorry, error happened. Try to reload a page please</Alert>
            ) : (
                <>
                    <AddTodoForm />
                    {loading ? <TodoSkeletons /> : <TodoList />}
                </>
            )}
        </Container>
    )
}
