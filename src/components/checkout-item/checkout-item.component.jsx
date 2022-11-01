import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cartItem.context'
import './checkout-item.styles'
import { CheckoutitemContainer, ImageContainer } from './checkout-item.styles'

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
    <CheckoutitemContainer>
      <ImageContainer>
        <img src={item.imageUrl} alt={item.name} />
      </ImageContainer>
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
    </CheckoutitemContainer>
  )
}

export default CheckOutItem
