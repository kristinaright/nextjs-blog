import { useState } from 'react'
import { connect } from "react-redux"
import { setInfo } from "../redux/actions/main"
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Game from '../components/game'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

function Home(props) {
    const { allPostsData } = props;
    const { name, setInfo } = props;
    const [newName, setName] = useState("");
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>hi! I`m Kris</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className={utilStyles.headingLg}>Game by react docs</h2>
                <Game />
            </section>
            <section>
                <h2 className={utilStyles.headingLg}>Adding redux</h2>
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