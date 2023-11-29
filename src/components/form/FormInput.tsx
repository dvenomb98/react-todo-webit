import React from 'react';
import { useField } from 'formik';
import { TextField } from '@mui/material';
import { IFormInputProps } from './formInput.interface';



const FormInput: React.FC<IFormInputProps> = ({
  name,
  label,
  helperText,
  variant = 'outlined',
  ...props
}) => {
  const [field, meta] = useField({ name });
  const errorText = meta.error && meta.touched ? meta.error : '';
  const id = `${name}-${field.name}`;

  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      helperText={errorText || helperText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};

export default FormInput;