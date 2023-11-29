import { useAppDispatch } from '@/redux/store'
import { deleteTodo, updateTodo } from '@/redux/slices/todoSlice'
import { supabase } from '@/services/supabase/client'
import { ITodo } from '@/lib/types/todo'

const useTodoActions = () => {
    const dispatch = useAppDispatch()

    const handleDeleteTodo = async (id: string) => {
        try {
            const { error } = await supabase.from('todos').delete().eq('id', id)
            if (error) throw new Error('Error happened during todo delete')
            dispatch(deleteTodo(id))
            return true
        } catch (e) {
            console.error(e)
            return false
            // Todo: add some global error state managment (global app toast for example)
        }
    }

    const handleUpdateTodo = async (todo: ITodo) => {
        try {
            const { error } = await supabase.from('todos').update(todo).eq('id', todo.id)
            if (error) throw new Error('Error happened during todo update')
            dispatch(updateTodo(todo))
            return true
        } catch (e) {
            console.error(e)
            return false
            // Todo: add some global error state managment (global app toast for example)
        }
    }

    return { handleDeleteTodo, handleUpdateTodo }
}

export default useTodoActions
