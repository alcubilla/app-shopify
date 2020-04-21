// acciones con axios async
// usamos thunk

import axios from 'axios'
import Creators from './actions'
import VariantsCreators from '../variant/actions'


//A-----------------------------------
// funciones que uso internamente en este archivo 
// pero qude el componente no necesita ejecutar
const _saveShopifyData = Creators.saveShopifyData
const _shopExist= Creators.shopExist
const _shopNotExist=Creators.shopNotExist
const _isLoading=Creators.isLoading
const _isNotLoading= Creators.isNotLoading
const _setError = Creators.setError
const clearError = Creators.clearError
const _setVariants = VariantsCreators.setVariants




//B------------------------
//funciones que 
//se conectan con apis async usando thunk
const getShopifyData = () => {
    return (dispatch)=>{
        const instanceShopify = axios.create({ 
            baseURL: '/api',
            timeout: 5000
        })
        return instanceShopify.get('/shopify')
            .then ( response =>{
                const { shop } = response.data
                dispatch(_saveShopifyData(shop))
                const { id } = shop
                axios.get(`/store/${id}`)
                .then( response =>{
                    
                    dispatch(_shopExist(response.data))
                    dispatch(_setVariants(response.data.variants))

                }, error=>{

                    dispatch(_shopNotExist())



                })

            }, error =>{



                
        })
        

    }
}

const createShop = (payload)=>{
    return(dispatch)=>{
        dispatch(_isLoading())

        axios.post('/store', payload)
            .then(response=>{
                dispatch(_shopExist(response.data))
            }, err=>{
                dispatch(_shopNotExist())

                switch(err.response.status){
                    case 400:
                        dispatch(_setError('ERROR DE VALIDACION, VERIFIQUE SUS DATOS'))
                        break;
                    default:
                        dispatch(_setError('ERROR DE SERVIDOR'))
                }

            })

    }
}




//C------------------------
//exportar las que se van a conectar con los componentes reales
// es decir tienen comunicacion con el exterior

export default {
    getShopifyData,
    createShop,
    clearError
}