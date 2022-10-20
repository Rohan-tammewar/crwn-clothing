import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext, UseContext } from 'react'
import { CartItemContext } from '../../contexts/cartItem.context'
const CartDropdown = () => {
  const { cartItems } = useContext(CartItemContext)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>checkout</Button>
    </div>
  )
}

export default CartDropdown
