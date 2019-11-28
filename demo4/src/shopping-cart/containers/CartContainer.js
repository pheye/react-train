
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { getCartProducts } from '../reducers/cart'

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    subtotal: 100.0
})

export default connect(
    mapStateToProps
)(Cart)