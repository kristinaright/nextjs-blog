import { useState } from 'react'
import Layout from '../../components/layout/layout'
import Head from 'next/head'
import { setInfo } from "../../redux/actions/main"
import { connect } from "react-redux"
import FormInput from '../../components/formInput/formInput'
import FormButton from '../../components/formButton/formButton'

interface HomePropsTypes {
    name: String;
    setInfo: Function;
}

const Redux: React.FC<HomePropsTypes> = ({name, setInfo}) => {
    const [newName, setName] = useState("");
    const submit = (e) => {
        setInfo(newName);
    };
    return (
        <Layout>
            <Head>
                <title>Redux</title>
            </Head>
            <section>
                <h2>3. Adding redux by <a href="https://dev.to/theallegrarr/adding-redux-to-next-js-app-4n5o">this link</a></h2>
                <p>Enter a Name {name}:</p>
                <FormInput
                    value={newName}
                    placeholder="text"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
                ></FormInput>
                <FormButton
                    onClick={submit}
                >Submit</FormButton>
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