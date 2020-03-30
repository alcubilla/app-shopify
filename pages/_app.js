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

class MyApp extends App{
    
    render(){
        const { Component, pageProps } = this.props;
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
                    <AppProvider i18n={translations}>
                        <Component {...pageProps} />
                    </AppProvider>
                </Provider>
                            
            </React.Fragment>
        )

    }
   
}

export default MyApp