import ProductCard from '../product-card/product-card.component'
import './category-preview.styles'
import { Link } from 'react-router-dom'
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './category-preview.styles'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <Link to={title}>{title.toUpperCase()}</Link>
      </Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={title} product={product}></ProductCard>
          })}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
