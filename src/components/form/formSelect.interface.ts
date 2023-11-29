import { SelectProps } from "@mui/material"

export interface IFormSelectProps extends SelectProps {
    name: string
    options: {
        value: string
        label: string
    }[]
}