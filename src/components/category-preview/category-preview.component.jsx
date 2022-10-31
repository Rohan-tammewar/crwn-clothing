import ProductCard from '../product-card/product-card.component'
import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <div className="title">
        <span>{title.toUpperCase()}</span>
      </div>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={title} product={product}></ProductCard>
          })}
      </div>
    </div>
  )
}

export default CategoryPreview
