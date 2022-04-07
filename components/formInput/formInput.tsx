import React from 'react';
import useStyles from './inputStyles'

interface FormInputProps {
    value: string;
    children?: any;
  };

const FormInput: React.FC<FormInputProps> = ({
    value,
    children
}) => {

    const classes = useStyles();
    return (
        <input className={classes.input} value={value} {...children}/>
    )
};

export default FormInput;