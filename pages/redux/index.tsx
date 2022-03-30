import { useState } from 'react'
import Layout from '../../components/layout/layout'
import Head from 'next/head'
import { setInfo } from "../../redux/actions/main"
import { connect } from "react-redux"

interface HomePropsTypes {
    name: String;
    setInfo: Function;
}

const Redux: React.FC<HomePropsTypes> = ({name, setInfo}) => {
    const [newName, setName] = useState("");

    return (
        <Layout>
            <Head>
                <title>Redux</title>
            </Head>
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
const mapStateToProps = state => {
    return { name: state.main.name }
   }
   
   const mapDispatchToProps = {
     setInfo
   }
   
export default connect(mapStateToProps, mapDispatchToProps)(Redux)