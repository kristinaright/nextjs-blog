import React from 'react';
import useStyles from './buttonStyles'

interface IFormButtonProps {
    disabled?: boolean;
    fullWidth?: boolean;
    type?: 'reset' | 'button' | 'submit';
    children: React.ReactNode;
    isLoading?: boolean;
    onClick?(e: React.FormEvent<HTMLElement>): void;
  }

const FormButton: React.FC<IFormButtonProps> = (props) => {

    const classes = useStyles();
    return (
        <button className={classes.button} {...props}></button>
    );
}

export default FormButton;