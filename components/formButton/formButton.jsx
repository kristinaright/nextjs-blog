import React from 'react';
import useStyles from './buttonStyles'

export default function FormButton(props) {

    const classes = useStyles();
    return (
        <button className={classes.button} {...props}></button>
    );
}