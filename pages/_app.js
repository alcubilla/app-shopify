import App from 'next/app'
import Head from 'next/head'
import { AppProvider } from '@shopify/polaris'
import { Provider } from '@shopify/app-bridge-react'
import '@shopify/polaris/styles.css'
import translations from '@shopify/polaris/locales/en.json'
import Cookies from 'js-cookie'

import axios from 'axios'
axios.defaults.baseURL = API_URL


// Importo utilerias de redux
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider as ReduxProvider} from 'react-redux'
import withRedux from 'next-redux-wrapper'
import reducer from '../store'
import { composeWithDevTools } from 'redux-devtools-extension'

import './general.css'

//Construyo el store con middlewares
const middlewares = [thunk]
const makeStore = (initalState, options)=>{
    return createStore(
        reducer,
        initalState,
        composeWithDevTools(applyMiddleware(...middlewares))
    )
}


class MyApp extends App {

    render(){
        const { Component, pageProps, store } = this.props;
        const config = { 
            apiKey: API_KEY, 
            shopOrigin: Cookies.get('shopOrigin'), 
            forceRedirect: true
        }
        return (
            <React.Fragment>
                <Head>
                    <title>Fernando App</title>
                    <meta charSet="utf-8" />
                </Head>

                <Provider config={config}>
                    <ReduxProvider store={store}>
                        <AppProvider i18n={translations}>
                            <Component {...pageProps} />
                        </AppProvider>
                    </ReduxProvider>
                </Provider>
                            
            </React.Fragment>
        )

    }

}


export default withRedux(makeStore)(MyApp)