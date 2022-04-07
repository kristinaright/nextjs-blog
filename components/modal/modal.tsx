import React from 'react';
import useStyles from './modalStyles'
import clsx from 'clsx';

interface ModalProps {
    children: any;
    visible: boolean;
    setVisible: (params: boolean) => void;
};

const Modal: React.FC<ModalProps> = ({
    children,
    visible,
    setVisible
}) => {
    const classes = useStyles();
    return (
        <div
        onClick={()=> {setVisible(false)}}
        className={clsx({
            [classes.modal]: true,
            [classes.active]: visible,
          })}
        >
            <div
            onClick={(e)=> e.stopPropagation()}
            className={classes.content}>
                {children}
            </div>
        </div>
    );
};

export default Modal;