import { createUseStyles } from 'react-jss';

export default createUseStyles({
    item: {
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '16px 20px',
        boxShadow: '0 0 30px rgba(175, 177, 192, .3)',
        borderRadius: '16px'
    },
    title: {
        fontSize: '28px'
    },
    close: {
        position: 'relative',
        height: '32px',
        width: '32px',
        borderRadius: '50%',
        border: '1px solid #00808a',
        boxShadow: 'none',
        backgroundColor: 'transparent',
        fontSize: '18px',
        cursor: 'pointer',
        '&:after': {
            content: '""',
            position: 'absolute',
            top: '8px',
            height: '12px',
            width: '0px',
            border: '.5px solid #00808a',
            transform: 'rotate(45deg)'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '8px',
            height: '12px',
            width: '0px',
            border: '.5px solid #00808a',
            transform: 'rotate(-45deg)'
        }
    },
    date: {
        color: 'rgba(0, 0, 0, .5)'
    }
});