import { Skeleton, Stack } from '@mui/material'
import { FC } from 'react'

const TodoSkeletons: FC = () => {
    return (
        <Stack gap={4}>
            <Skeleton sx={{ bgcolor: 'grey.600' }} variant="rectangular" width={'100%'} height={60} />
            <Skeleton sx={{ bgcolor: 'grey.600' }} variant="rectangular" width={'100%'} height={250} />
            <Skeleton sx={{ bgcolor: 'grey.600' }} variant="rectangular" width={'100%'} height={250} />
        </Stack>
    )
}

export default TodoSkeletons
