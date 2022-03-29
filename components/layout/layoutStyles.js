import { createUseStyles } from 'react-jss';

export default createUseStyles({
    container: {
        maxWidth: '36rem',
        padding: '0 1rem',
        margin: '3rem auto 6rem'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    backToHome: {
        margin: '3rem 0 0',
    },
    headingXl: {
        fontSize: '2rem',
        lineHeight: '1.3',
        fontWeight: '800',
        letterSpacing: '-0.05rem',
        margin: '1rem 0',
    },
    lightText: {
        color: '#666',
    }
});