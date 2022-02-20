import '../styles/global.css'
import { AppProps } from 'next/app'
import React from "react"
import { wrapper } from "../redux/store"

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(App);