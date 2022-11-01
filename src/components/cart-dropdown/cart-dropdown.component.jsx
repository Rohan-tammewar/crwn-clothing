import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext, UseContext } from 'react'
import { CartItemContext } from '../../contexts/cartItem.context'
import { useNavigate } from 'react-router-dom'
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles.jsx'

const CartDropdown = () => {
  const navigate = useNavigate()

  const gotTocheckoutHandler = () => {
    navigate('/checkout')
  }
  const { cartItems } = useContext(CartItemContext)
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={gotTocheckoutHandler}>checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
