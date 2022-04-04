import { createUseStyles } from 'react-jss';

export default createUseStyles({
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    item: {
        marginBottom: '16px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
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