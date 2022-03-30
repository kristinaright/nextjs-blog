import { connect } from "react-redux"
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'


const Home: React.FC = () => {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>hi! Im kris and Im learning React</h1>
        </Layout>
    )
}


const mapStateToProps = state => {
    return { name: state.main.name }
}

export default connect(mapStateToProps)(Home);