import React from 'react';
import useStyles from './modalStyles'
import clsx from 'clsx';

export default function Modal({children, visible, setVisible}) {
    console.log('visible', visible);

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
}