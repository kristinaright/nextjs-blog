import { useState } from 'react'
import { connect } from "react-redux"
import { setInfo } from "../redux/actions/main"
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import Game from '../components/game'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

interface HomePropsTypes {
    allPostsData: Array<any>;
    name: String;
    setInfo: Function;
}

const Home: React.FC<HomePropsTypes> = ({allPostsData, name, setInfo}) => {
    const [newName, setName] = useState("");
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <p>hi! I`m Kris and I'm learning react</p>
            </section>
            <section>
                <h2>1. Blog</h2>
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
            <section>
                <h2>2. Game by react docs</h2>
                <Game />
            </section>
            <section>
                <h2>3. Adding redux by <a href="https://dev.to/theallegrarr/adding-redux-to-next-js-app-4n5o">this link</a></h2>
                <p>Enter a Name {name}:</p>
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setName(e.target.value)}>

                </input>
                <button onClick={() => setInfo(newName)}>
                    Submit
                </button>
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
    return { name: state.main.name }
}

const mapDispatchToProps = {
    setInfo
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);