import { RootState } from '@/redux/rootReducer'
import { useAppSelector } from '@/redux/store'
import { Alert, Button, Drawer, Stack } from '@mui/material'
import { FC, useState } from 'react'
import { IUpdateTodo } from './updateTodo.interface'
import { Form, Formik } from 'formik'
import useTodoActions from '@/hooks/useTodoActions'
import FormInput from '@/components/form/FormInput'
import FormSelect from '@/components/form/FormSelect'
import useFieldValidation from '@/hooks/useFieldValidation'
import * as yup from 'yup'
import { FormState } from '@/lib/types/form'
import { progressOptions } from '@/lib/const/todosConst'

// Note: drawers and modals could be added to reducer with update, destroy etc.
// and usage could be calling them with useModal/useDrawer hook or something like this
// but i will not spend time on this

const UpdateTodo: FC<IUpdateTodo> = ({ isOpen, toggle, todoId, ...props }) => {
    const [state, setState] = useState<FormState>(FormState.NOT_SENDED)

    const { handleUpdateTodo } = useTodoActions()

    const yupField = useFieldValidation()
    const validationSchema = yup.object({
        name: yupField.string.required,
        description: yupField.string.required,
        progress: yupField.select.required(progressOptions),
    })

    const todos = useAppSelector((state: RootState) => state.todos.todos)
    const todoToUpdate = todos.find((todo) => todo.id === todoId)!

    return (
        <Drawer PaperProps={{ sx: { width: 600 } }} open={isOpen} onClose={toggle} {...props}>
            <Stack gap={2}>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={todoToUpdate}
                    onSubmit={async (values) => {
                        setState(FormState.NOT_SENDED)
                        const res = await handleUpdateTodo({...values, time: new Date().toISOString()})
                        if (!res) {
                            setState(FormState.ERROR)
                            return
                        }
                        setState(FormState.SUCCESS)
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Stack gap={4} sx={{ p: 4 }}>
                                <FormInput name="name" label="Name" variant="outlined" />
                                <FormInput
                                    multiline
                                    rows={6}
                                    name="description"
                                    label="Description"
                                    variant="outlined"
                                />
                                <FormSelect name="progress" label="Progress" options={progressOptions} />
                                <Button type="submit" disabled={isSubmitting} variant="contained">
                                    Update
                                </Button>
                                {state === FormState.ERROR && <Alert color="error">Sorry error happened</Alert>}
                                {state === FormState.SUCCESS && <Alert>Updated successfully!</Alert>}
                            </Stack>
                        </Form>
                    )}
                </Formik>
            </Stack>
        </Drawer>
    )
}

export default UpdateTodo
