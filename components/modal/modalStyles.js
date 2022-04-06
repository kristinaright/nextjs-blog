import { createUseStyles } from 'react-jss';

export default createUseStyles({
    modal: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: 'none',
        backgroundColor: 'rgba(0, 0, 0, .3)',
    },
    active: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        padding: '16px',
        borderRadius: '16px',
        backgroundColor: '#FFFFFF',
        minWidth: '400px'
    }
});