import React, { useState } from 'react';
import useStyles from './squareStyles'

export default function Square(props) {

    const classes = useStyles();
    return (
        <button
            className={classes.square}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}