import Layout from '../../components/layout/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import useStyles from '../../components/layout/layoutStyles'
import { GetStaticProps, GetStaticPaths } from 'next'

interface PostTypes {
    postData: {
        title: string;
        date: string;
        contentHtml: string;
    };
};

const Post: React.FC<PostTypes> = ({ postData }) => {
    const classes = useStyles();
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={classes.headingXl}>{postData.title}</h1>
                <div className={classes.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string)
    return {
        props: {
            postData
        }
    }
}

export default Post;