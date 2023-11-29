import useTodoActions from '@/hooks/useTodoActions'
import { EProgress, ITodo } from '@/lib/types/todo'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { FC } from 'react'
import { ITodoItemProps } from './todoItem.interface'

const progressLabel = {
    [EProgress.NOT_STARTED]: 'Not started',
    [EProgress.IN_PROGRESS]: 'In progress',
    [EProgress.COMPLETED]: 'Completed',
}

const progressColor = {
    [EProgress.NOT_STARTED]: 'blue',
    [EProgress.IN_PROGRESS]: 'orange',
    [EProgress.COMPLETED]: 'green',
}

const TodoItem: FC<ITodoItemProps> = ({ todo, openUpdate }) => {
    const { name, description, time, progress, id } = todo
    const { handleDeleteTodo } = useTodoActions()

    return (
        <Card sx={{ bordeColor: 'gray', border: 1, borderRadius: 2, p: 2 }}>
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography color={progressColor[progress]} variant="body2">
                    {progressLabel[progress]}
                </Typography>
                <Typography variant="body1" sx={{ py: 2 }}>
                    {description}
                </Typography>
                <Typography variant="caption">Edited: {dayjs(time).format('DD/MM/YYYY - HH:mm')}</Typography>
            </CardContent>
            <CardActions sx={{ mt: 2 }}>
                <Button
                    onClick={async () => await handleDeleteTodo(id)}
                    variant="contained"
                    color="error"
                    sx={{ width: 200 }}
                >
                    Delete todo
                </Button>
                <Button variant="contained" onClick={() => openUpdate(id)} sx={{ width: 200 }}>
                    Edit todo
                </Button>
            </CardActions>
        </Card>
    )
}

export default TodoItem
