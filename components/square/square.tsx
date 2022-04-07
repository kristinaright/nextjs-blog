import React, { useState } from 'react';
import useStyles from './squareStyles'

interface SquareProps {
    value?: string;
    onClick: () => void;
  };

const Square: React.FC<SquareProps> = (props) => {

    const classes = useStyles();
    return (
        <button
            className={classes.square}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
};

export default Square;