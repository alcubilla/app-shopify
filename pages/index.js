//container de redux

import { connect } from 'react-redux'
import Home from '../components/Home'
import {shopifystoreOperations} from '../store/shopifystore'

//conectar componente con el container
const mapStateToProps = state=>({
        shop_is_loading: state.shopify.shop_is_loading,
        shop_exists: state.shopify.shop_exists, 
        shop_status: state.shopify.shop_status

})


const mapDispatchToProps = dispatch =>({
    getShopifyData: () => dispatch(shopifystoreOperations.getShopifyData())
})

//conecto con Home
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)