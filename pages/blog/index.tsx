import { useState } from 'react'
import Layout from '../../components/layout/layout'
import Head from 'next/head'
import { getSortedPostsData } from '../../lib/posts'
import { setPosts } from "../../redux/actions/main"
import { connect, useDispatch } from "react-redux"
import PostsList from '../../components/postsList/postsList'
import PostsForm from '../../components/postsForm/postsForm'
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

        setAllPosts([...allPosts, {...post, date: '2021-02-21'}]);
        setPost({title: '', description: '', date: ''});
    };

    const removePost = (post) => {
        setAllPosts(allPosts.filter((currentPost) => {
            return currentPost.title !== post.title
        }));
    };
    return (
        <Layout>
            <Head>
                <title>blog</title>
            </Head>
            <section>
                <h1>1. Blog</h1>
                <PostsForm post={post} setPost={setPost} addNewPost={addNewPost}></PostsForm>
                <PostsList allPosts={allPosts} removePost={removePost}></PostsList>
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