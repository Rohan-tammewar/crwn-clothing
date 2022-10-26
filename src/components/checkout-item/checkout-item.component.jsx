import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cartItem.context'
import './checkout-item.styles.scss'

const CheckOutItem = ({ item }) => {
  const {
    removeItemFromCart,
    addItemToCart,
    removeProductFromCart,
  } = useContext(CartItemContext)

  const removeHandler = () => removeProductFromCart(item)
  const incrementHandler = () => addItemToCart(item)
  const decrementHandler = () => removeItemFromCart(item)
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementHandler}>
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div className="arrow" onClick={incrementHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{item.price}</span>
      <div className="remove-button" onClick={removeHandler}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckOutItem
