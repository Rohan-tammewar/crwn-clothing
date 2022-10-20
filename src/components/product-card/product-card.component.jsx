import './product-card.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { CartItemContext } from '../../contexts/cartItem.context'

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartItemContext)
  const addProductToCart = () => addItemToCart(product)
  const { imageUrl, name, price } = product
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  )
}

export default ProductCard
