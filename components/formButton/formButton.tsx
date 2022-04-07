import React from 'react';
import useStyles from './buttonStyles'

interface IFormButtonProps {
    disabled?: boolean;
    children: React.ReactNode;
    onClick?(e: React.FormEvent<HTMLElement>): void;
  }
 //interface IFormButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const FormButton: React.FC<IFormButtonProps> = ({children, ...rest}) => {

    const classes = useStyles();
    return (
        <button className={classes.button} {...rest}>{children}</button>
    );
}

export default FormButton;