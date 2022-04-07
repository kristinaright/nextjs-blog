import React from 'react';
import useStyles from './inputStyles'

interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
    onChange?(e: React.FormEvent<HTMLElement>): void;
}

const FormInput: React.FC<FormInputProps> = ({
    value,
    ...rest
}) => {

    const classes = useStyles();
    return (
        <input className={classes.input} value={value} {...rest}/>
    )
};

export default FormInput;