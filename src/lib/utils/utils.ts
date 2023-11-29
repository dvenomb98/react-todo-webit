import { supabase } from '@/services/supabase/client'
import { ITodo } from '@/lib/types/todo'

export const generateTaskId = () => {
    const typedArray = new Uint8Array(5)
    const randomValues = window.crypto.getRandomValues(typedArray)
    return randomValues.join('')
}

export const getInitialTasks = async () => {
    try {
        const { data, error } = await supabase.from('todos').select().returns<ITodo[]>()
        if (error) throw new Error('Error happened during initial fetch')
        return data
    } catch (e) {
        return false
    }
}
