import { useState } from 'react'
import Layout from '../../components/layout/layout'
import Head from 'next/head'
import Link from 'next/link'
import FormattedDate from '../../components/date'
import FormInput from '../../components/formInput/formInput'
import FormButton from '../../components/formButton/formButton'
import { getSortedPostsData } from '../../lib/posts'
import { setPosts } from "../../redux/actions/main"
import { connect, useDispatch } from "react-redux"
interface HomePropsTypes {
    allPostsData: Array<any>;
    name: String;
    setInfo: Function;
}

const Blog: React.FC<HomePropsTypes>= ({allPostsData}) => {

    const [allPosts, setAllPosts] = useState([...allPostsData]);
    const [post, setPost] = useState({title: '', description: '', date: ''});

    const addNewPost = (e) => {
        e.preventDefault();

        setAllPosts([...allPosts, {...post, id: new Date(), date: '2021-02-21'}]);
        setPost({title: '', description: '', date: ''});
    };
    return (
        <Layout>
            <Head>
                <title>blog</title>
            </Head>
            <section>
                <h1>1. Blog</h1>
                <form>
                    <FormInput
                    value={post.title}
                    type="text"
                    placeholder="Заголовок"
                    onChange={e => setPost({...post, title: e.target.value})}
                    ></FormInput>
                    <FormInput
                    value={post.description}
                    type="text"
                    placeholder="Описание"
                    onChange={e => setPost({...post, description: e.target.value})}
                    ></FormInput>
                    <FormButton onClick={addNewPost}>Добавить новость</FormButton>
                </form>
                <ul>
                    {allPosts.map(({ id, date, title }) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small>
                                <FormattedDate dateString={date} />
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

const mapStateToProps = state => {
    return { posts: state.main.posts || [] }
   }
   
   const mapDispatchToProps = {
     setPosts
   }

export default connect(mapStateToProps, mapDispatchToProps)(Blog)