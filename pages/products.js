import { connect } from 'react-redux'
import Products from '../components/Products'

import {shopifystoreOperations} from '../store/shopifystore'
import {variantOperations } from '../store/variant'
//conectar componente con el container
const mapStateToProps = state=>({
        variant_is_loading: state.variant.variant_is_loading,
        variants: state.variant.variants
    

})


const mapDispatchToProps = dispatch =>({
    getShopifyData: () => dispatch(shopifystoreOperations.getShopifyData()),
    solveVariant: (id) => dispatch(variantOperations.solveVariant(id)),
   

})

//conecto con Home
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)