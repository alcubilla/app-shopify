//padre de todas las paginas...esto es en next
//sobreescribimos el defatult
//todas las paginas tengan los mismos elementos de polaris
import App from 'next/app' //clase de JS donde vamos a extender las paginas
import Head from 'next/head' //acceder el html de index por aqui
import { AppProvider } from '@shopify/polaris'
import {Provider} from '@shopify/app-bridge-react'
import '@shopify/polaris/styles.css' //agregamos estilos
import translations from '@shopify/polaris/locales/en.json'
import Cookies from 'js-cookie'

import axios from 'axios'
axios.defaults.baseURL = API_URL


//importo utilerias de redux
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import { Provider as ReduxProvider }  from 'react-redux'
import withRedux from 'next-redux-wrapper'
import reducer from '../store'
import {composeWithDevTools} from 'redux-devtools-extension'


//construyo el store
const midlewares = [thunk]
const makeStore = (initialState, options)=>{
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(...midlewares))
    )
}



class MyApp extends App{
    
    render(){
        const { Component, pageProps, store} = this.props;
        const config = { 
            apiKey: API_KEY, 
            shopOrigin: Cookies.get('shopOrigin'), 
            forceRedirect: true
        }
        return (
            <React.Fragment>
                <Head>
                    <title>Marina App</title>
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