import Layout from '../../components/layout/layout'
import Head from 'next/head'
import Game from '../../components/game/game'


const GamePage: React.FC= () => {
    return (
        <Layout>
            <Head>
                <title>game</title>
            </Head>
            <section>
                <h1>2. Game by react docs</h1>
                <Game />
            </section>
        </Layout>
    )
}

export default GamePage;