import Head from 'next/head'
import Image from 'next/image'
import useStyles from './layoutStyles'
import Link from 'next/link'

const name = 'Kris'
export const siteTitle = 'Next.js Sample Website'
interface LayoutProps {
    children: React.ReactNode;
    home?: boolean;
  };

const Layout: React.FC<LayoutProps> = ({
        children,
        home
    }) => {

  const classes = useStyles();
    return (
        <div className={classes.body}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={classes.header}>
                <div className={classes.container}>
                    {home ? (
                        <h2 className={classes.logo}>LOGO</h2>
                    ) : (
                        <>
                            <Link href="/">
                                <a>
                                   <h2 className={classes.logo}>LOGO</h2>
                                </a>
                            </Link>
                        </>
                    )}

                    <nav className={classes.nav}>
                        <Link href={'/blog'}>
                            <a className={classes.link}>Blog</a>
                        </Link>
                        <Link href={'/game'}>
                            <a className={classes.link}>Game</a>
                        </Link>
                        <Link href={'/redux'}>
                            <a className={classes.link}>Redux</a>
                        </Link>
                    </nav>
                </div>
            </header>
            <div className={classes.container}>
            <main>{children}</main>
            {!home && (
                <div className={classes.backToHome}>
                    <Link href="/">
                        <a>??? Back to home</a>
                    </Link>
                </div>
            )}
            </div>
        </div>
    )
}

export default Layout;