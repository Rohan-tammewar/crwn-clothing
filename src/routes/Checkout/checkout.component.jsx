import './checkout.styles.scss'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cartItem.context'

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartItemContext)
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        return <CheckOutItem key={item.id} item={item} />
      })}
      <span className="total">Total : $ {cartTotalPrice}</span>
    </div>
  )
}

export default Checkout
