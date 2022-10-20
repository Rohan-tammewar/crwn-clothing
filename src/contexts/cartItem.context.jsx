import { createContext, useState, useEffect } from 'react'

function addCartItem(cartItems, productToAdd) {
  //if item present in cart
  const isItemAlreadyInCart = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  )
  //add quantity if item present
  if (isItemAlreadyInCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
  }
  //add new item to cart
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartItemContext = createContext({
  cartVisible: false,
  cartItems: [],
  setCartVisible: () => null,
  addItemToCart: () => {},
  cartCount: 0,
})

export const CartItemProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartVisible, setCartVisible] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  useEffect(() => {
    const noOfItemsInCart = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0,
    )
    setCartCount(noOfItemsInCart)
  }, [cartItems])
  const value = {
    cartVisible,
    setCartVisible,
    cartItems,
    addItemToCart,
    cartCount,
  }

  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  )
}
