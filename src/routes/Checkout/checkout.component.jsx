import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cartItem.context'

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartItemContext)
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => {
        return <CheckOutItem key={item.id} item={item} />
      })}
      <Total>Total : $ {cartTotalPrice}</Total>
    </CheckoutContainer>
  )
}

export default Checkout
