//container de redux

import { connect } from 'react-redux'
import Registro from '../components/Registro'
import {shopifystoreOperations} from '../store/shopifystore'

//conectar componente con el container
const mapStateToProps = state=>({

        shop_is_loading: state.shopify.shop_is_loading,
        shop_exists: state.shopify.shop_exists, 
        shop: state.shopify.shop,
        shop_error: state.shopify.shop_error

})


const mapDispatchToProps = dispatch =>({
    createShop: (payload) => dispatch(shopifystoreOperations.createShop(payload)),
    clearError: ()=> dispatch(shopifystoreOperations.clearError())
})

//conecto con Home
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registro)