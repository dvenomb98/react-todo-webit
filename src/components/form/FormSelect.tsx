import React from 'react'
import { useField, useFormikContext } from 'formik'
import { FormControl, InputLabel, Select,  MenuItem, FormHelperText } from '@mui/material'
import { IFormSelectProps } from './formSelect.interface'


const FormSelect: React.FC<IFormSelectProps> = ({ name, label, options, ...props }) => {
    const [field, meta] = useField({ name })
    const { setFieldValue } = useFormikContext()
    const errorText = meta.error && meta.touched ? meta.error : ''
    const id = `${name}-${field.name}`

    return (
        <FormControl fullWidth error={!!errorText}>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                id={id}
                value={field.value}
                label={label}
                onChange={(e) => setFieldValue(name, e.target.value)}
                {...props}
            >
                {options.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                        {opt.label}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{errorText}</FormHelperText>
        </FormControl>
    )
}

export default FormSelect
