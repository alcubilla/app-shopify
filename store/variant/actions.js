//Acciones puras no async
import types from './types'

const setVariants = (variants)=>{
    return {
        type: types.SET_VARIANTS,
        variants        
    }
}

const solveVariant = (id)=>{
    return {
        type: types.SOLVE_VARIANT,
        id
    }
}


const closeModal = ()=>{
    return {
        type: types.CLOSE_MODAL
    }
}

const stepVariant = (selected, next_index)=>{
    return {
        type: types.STEP_VARIANT,
        selected,
        next_index
    }
}


export default {
    setVariants,
    solveVariant,
    closeModal,
    stepVariant
}

