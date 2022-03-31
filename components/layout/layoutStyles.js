import { createUseStyles } from 'react-jss';

export default createUseStyles({
    body: {
        backgroundColor: '#f7edff',
        height: '100vh',
    },
    container: {
        width: '50rem',
        padding: '1rem 1rem',
        margin: '0 auto'
    },
    header: {
        '& $container': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
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
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
    },
    link: {
        display: 'block',
        padding: '4px 8px',
    }
});