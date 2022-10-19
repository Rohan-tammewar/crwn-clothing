import { createContext, useState } from 'react'
import product_data from '../shop-data.json'

export const ProductContext = createContext({
  products: product_data,
  setProducts: () => null,
})

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(product_data)
  const value = { products, setProducts }
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
