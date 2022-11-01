import './product-card.styles'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cartItem.context'
import { ProductCardContainer } from './product-card.styles'

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartItemContext)
  const addProductToCart = () => addItemToCart(product)
  const { imageUrl, name, price } = product
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
