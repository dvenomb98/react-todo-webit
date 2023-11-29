import { Alert, Button, Stack } from '@mui/material'
import { Form, Formik } from 'formik'
import { FC, useState } from 'react'
import FormInput from '../form/FormInput'
import useFieldValidation from '@/hooks/useFieldValidation'
import * as yup from 'yup'
import { EProgress } from '@/lib/types/todo'
import { addTodo } from '@/redux/slices/todoSlice'
import { useAppDispatch } from '@/redux/store'
import { supabase } from '@/services/supabase/client'
import { generateTaskId } from '@/lib/utils/utils'
import { FormState } from '@/lib/types/form'

const initialValues = {
    name: '',
    description: '',
}

const AddTodoForm: FC = () => {
    const [state, setState] = useState<FormState>(FormState.NOT_SENDED)
    const dispatch = useAppDispatch()
    const yupField = useFieldValidation()
    const validationSchema = yup.object({
        name: yupField.string.required,
        description: yupField.string.required,
    })

    const handleSubmit = async (values: typeof initialValues) => {
        setState(FormState.NOT_SENDED)

        const newTodo = {
            id: generateTaskId(),
            progress: EProgress.NOT_STARTED,
            time: new Date().toISOString(),
            ...values,
        }

        try {
            const { error } = await supabase.from('todos').insert(newTodo)
            if (error) throw new Error('Inserting to DB failed:' + error.message)
            dispatch(addTodo(newTodo))
            setState(FormState.SUCCESS)
        } catch (e) {
            setState(FormState.ERROR)
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values) => await handleSubmit(values)}
            validationSchema={validationSchema}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Stack spacing={3} maxWidth={500} sx={{ border: 1, p: 2, borderRadius: 2, borderColor: 'gray' }}>
                        <h2>Add new todo</h2>

                        <FormInput name="name" label="Name" variant="outlined" />
                        <FormInput name="description" label="Description" variant="outlined" />
                        <Button disabled={isSubmitting} type="submit" variant="contained">
                            Add new todo
                        </Button>

                        {state === FormState.SUCCESS && <Alert>Successfully created</Alert>}
                        {state === FormState.ERROR && <Alert color="error">Error happened. Try it again.</Alert>}
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}

export default AddTodoForm
