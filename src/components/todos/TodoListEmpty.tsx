import { Alert } from '@mui/material'
import { FC } from 'react'

const TodoListEmpty: FC<{ isFiltered?: boolean }> = ({ isFiltered }) => (
    <Alert color="warning">
        {isFiltered ? 'No filtered todos found. Try to change filter' : 'You dont have any todos yet. Create a new one'}
    </Alert>
)

export default TodoListEmpty
