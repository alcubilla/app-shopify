//acciones puras no async

import types from './types'

const saveShopifyData = (shop) =>{
    return{
        type: types.SAVE_SHOPIFY_DATA,
        shop
    }
}

export default{
    saveShopifyData,
}

