//acciones puras no async

import types from './types'

const saveShopifyData = (shop) =>{
    return{
        type: types.SAVE_SHOPIFY_DATA,
        shop
    }
}


//data_store viene de mongo
const shopExist=( data_store )=>{

    return{
    type: types.SHOP_EXIST,
    data_store

    }
}

const shopNotExist=()=>{

    return{
    type: types.SHOP_NOT_EXIST

    }
}

const isLoading=()=>{

    return{
    type: types.SHOP_IS_LOADING

    }
}

const isNotLoading=()=>{

    return{
    type: types.SHOP_IS_NOT_LOADING

    }
}

const setError=(error)=>{

    return{
    type: types.SET_ERROR,
    error

    }
}
const clearError=()=>{

    return{
    type: types.CLEAR_ERROR

    }
}

export default{
    saveShopifyData,
    shopExist,
    shopNotExist,
    isLoading,
    isNotLoading,
    clearError,
    setError
}

