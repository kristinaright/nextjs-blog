import { useMemo, useState } from 'react'
import Layout from '../../components/layout/layout'
import Head from 'next/head'
import { getSortedPostsData } from '../../lib/posts'
import { setPosts } from "../../redux/actions/main"
import { connect, useDispatch } from "react-redux"
import PostsList from '../../components/postsList/postsList'
import PostsForm from '../../components/postsForm/postsForm'
import FilterSelect from '../../components/filterSelect/filterSelect'
import FormInput from '../../components/formInput/formInput'
interface HomePropsTypes {
    allPostsData: Array<any>;
    name: String;
    setInfo: Function;
}

const Blog: React.FC<HomePropsTypes>= ({allPostsData}) => {

    // локальное хранилище компонента(state), что-то вроде data в vue,
    // только с дополнительными мутациями
    const [allPosts, setAllPosts] = useState([...allPostsData]);
    const [post, setPost] = useState({title: '', description: '', date: ''});
    const [selectedSorting, setSelectedSorting] = useState('');
    const [searchQuery, setSearchQuery] = useState('');


    // хук useMemo как раз подобие computed во вью(вычисляемое выражение)
    // первый параметр - функция коллбэк,  второй параметр - массив зависимостей
    // вызывается только в случае, если хотя бы одна из зависимостей поменяется
    const sortedPosts = useMemo(() => {
        if(selectedSorting) {
            console.log('allPosts', allPosts);
            return [...allPosts].sort((last, current) => last[selectedSorting].localeCompare(current[selectedSorting]));
        }
        return allPosts;
    }, [selectedSorting, allPosts]);

    // это те же methods
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
    const sortPosts = (sort) => {
        setSelectedSorting(sort);
    };

    return (
        <Layout>
            <Head>
                <title>blog</title>
            </Head>
            <section>
                <h2>1. Blog</h2>
                <PostsForm post={post} setPost={setPost} addNewPost={addNewPost}></PostsForm>
                <section>
                    <FormInput
                        value={searchQuery}
                        placeholder="поиск"
                        onChange={e => setSearchQuery(e.target.value)}
                    ></FormInput>
                    <FilterSelect
                        value={selectedSorting}
                        onChange={sortPosts}
                        defaultValue="Сортировка"
                        options={[
                            {
                                value: 'title',
                                name: 'По названию'
                            },
                            {
                                value: 'description',
                                name: 'По описанию'
                            },
                        ]}
                    ></FilterSelect>
                </section>
                <PostsList allPosts={sortedPosts} removePost={removePost}></PostsList>
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