import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './cart-icon.styles.jsx'

import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cartItem.context'

const CartIcon = () => {
  //toggling of cart dropdown component
  const { cartVisible, setCartVisible } = useContext(CartItemContext)

  const { cartCount } = useContext(CartItemContext)

  const handleClick = () => setCartVisible(!cartVisible)

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
