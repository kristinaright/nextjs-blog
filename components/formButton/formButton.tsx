import React from 'react';
import useStyles from './buttonStyles'

const FormButton: React.FC = (props) => {

    const classes = useStyles();
    return (
        <button className={classes.button} {...props}></button>
    );
}

export default FormButton;