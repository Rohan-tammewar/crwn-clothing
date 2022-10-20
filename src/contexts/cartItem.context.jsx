import { createContext, useState } from 'react'

export const CartItemContext = createContext({
  cartVisible: false,
  cartItems: [],
  setCartVisible: () => null,
  setCartItems: () => null,
})

export const CartItemProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartVisible, setCartVisible] = useState(false)
  const value = { cartVisible, setCartVisible, cartItems, setCartItems }
  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  )
}
