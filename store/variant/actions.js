//acciones puras no async

import types from './types'

const setVariants = (variants) =>{
    return{
        type: types.SET_VARIANTS,
        variants
    }
}


export default{
    setVariants,
   
}

