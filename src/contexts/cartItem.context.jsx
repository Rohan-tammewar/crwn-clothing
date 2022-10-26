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

function removeCartItem(cartItems, cartItemToRemove) {
  const cartItemToBeRemoved = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  )

  if (cartItemToBeRemoved.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToBeRemoved.id,
    )
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  )
}

function removeProduct(cartItems, producToBeRemoved) {
  return cartItems.filter((cartItem) => producToBeRemoved.id !== cartItem.id)
}
export const CartItemContext = createContext({
  cartVisible: false,
  cartItems: [],
  setCartVisible: () => null,
  addItemToCart: () => {},
  removeItemfromCart: () => {},
  cartCount: 0,
  removeProductFromCart: () => {},
  cartTotalPrice: 0,
})

export const CartItemProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartVisible, setCartVisible] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [cartTotalPrice, srtCartTotalPrice] = useState(0)

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  const removeProductFromCart = (productToBeRemoved) => {
    setCartItems(removeProduct(cartItems, productToBeRemoved))
  }
  useEffect(() => {
    const noOfItemsInCart = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0,
    )
    setCartCount(noOfItemsInCart)
  }, [cartItems])

  useEffect(() => {
    const cartTotalPrice = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0,
    )
    srtCartTotalPrice(cartTotalPrice)
  }, [cartItems])
  const value = {
    cartVisible,
    setCartVisible,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    removeProductFromCart,
    cartTotalPrice,
  }

  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  )
}
