import { ReactNode } from 'react'
import * as yup from 'yup'

const messages = Object.freeze({
    required: 'Required!',
})

const useFieldValidation = () => {
    const yupField = Object.freeze({
        string: {
            required: yup.string().nullable().required(messages.required),
            optional: yup.string().nullable(),
        },
        checkbox: {
            required: yup.bool().oneOf([true], messages.required),
            optional: yup.bool().nullable(),
        },
        select: {
            required: (options: { value: string; label: string | ReactNode }[]) =>
                yup
                    .string()
                    .oneOf(options.map((op) => op.value))
                    .required(messages.required)
                    .nullable(),
            optional: yup.mixed(),
        },
    })

    return yupField
}

export default useFieldValidation
