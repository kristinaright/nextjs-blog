import Layout from '../../components/layout/layout'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/date'
import { getSortedPostsData } from '../../lib/posts'

interface HomePropsTypes {
    allPostsData: Array<any>;
    name: String;
    setInfo: Function;
}

const Blog: React.FC<HomePropsTypes>= ({allPostsData}) => {
    return (
        <Layout>
            <Head>
                <title>blog</title>
            </Head>
            <section>
                <h1>1. Blog</h1>
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default Blog;