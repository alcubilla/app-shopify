// acciones con axios async
// usamos thunk

import axios from 'axios'
import Creators from './actions'


//A-----------------------------------
// funciones que uso internamente en este archivo 
// pero qude el componente no necesita ejecutar
const _saveShopifyData = Creators.saveShopifyData




//B------------------------
//funciones que 
//se conectan con apis async usando thunk
const getShopifyData = () => {
    return (dispatch)=>{
        const instanceShopify = axios.create({ 
            baseURL: '/api',
            timeout: 5000
        })
        return instanceShopify.get(`/shopify`)
            .then ( response =>{
                const { shop } = response.data
                dispatch(_saveShopifyData(shop))


                const { id } = shop
                axios.get(`/store/${id}`)
                    .then( response =>{

                    }, error=>{




                    })
            }, error =>{



                
            })
        

    }
}





//C------------------------
//exportar las que se van a conectar con los componentes reales
// es decir tienen comunicacion con el exterior

export default {
    getShopifyData
}