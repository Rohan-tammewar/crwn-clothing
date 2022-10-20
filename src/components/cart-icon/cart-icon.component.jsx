import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg'
import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cartItem.context'

const CartIcon = () => {
  //toggling of cart dropdown component
  const { cartVisible, setCartVisible } = useContext(CartItemContext)

  const handleClick = () => setCartVisible(!cartVisible)

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon
