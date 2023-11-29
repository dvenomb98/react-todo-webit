import { useAppDispatch } from '@/redux/store'
import { setInitialTodos } from '@/redux/slices/todoSlice'
import { getInitialTasks } from '@/lib/utils/utils'
import { useEffect, useState } from 'react'

const useInitialTodos = () => {
    const dispatch = useAppDispatch()

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTodos = async () => {
            const data = await getInitialTasks()
            if (!data) {
                setError(true)
                return
            }
            dispatch(setInitialTodos(data))
            setLoading(false)
        }

        getTodos()
    }, [])

    return { error, loading }
}

export default useInitialTodos
