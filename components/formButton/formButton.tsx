import React from 'react';
import useStyles from './buttonStyles'

interface IFormButtonProps {
    disabled?: boolean;
    children: React.ReactNode;
    onClick?(e: React.FormEvent<HTMLElement>): void;
  }

const FormButton: React.FC<IFormButtonProps> = (props) => {

    const classes = useStyles();
    return (
        <button className={classes.button} {...props}></button>
    );
}

export default FormButton;