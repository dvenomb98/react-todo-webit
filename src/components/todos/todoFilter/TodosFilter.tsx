import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FC } from 'react'
import { ITodosFilterProps } from './todosFilter.interface'
import { EProgress } from '@/lib/types/todo'
import { progressOptions } from '@/lib/const/todosConst'

const todosFilterId = 'todos-filter-select-input'

const TodosFilter: FC<ITodosFilterProps> = ({ value, onChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id={todosFilterId}>Filter todos</InputLabel>
            <Select
                labelId={todosFilterId}
                id={todosFilterId}
                value={value || ''}
                label="Filter todos"
                onChange={(e) => onChange(e.target.value as EProgress)}
            >
                {progressOptions.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                        {opt.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default TodosFilter
