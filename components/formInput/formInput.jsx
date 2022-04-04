import React from 'react';
import useStyles from './inputStyles'

const FormInput = (props) => {

    const classes = useStyles();
    return (
        <input className={classes.input} {...props}/>
    )
};
export default FormInput;