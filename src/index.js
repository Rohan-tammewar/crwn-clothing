import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { UserProvider } from '../src/contexts/user.context'
import { CategoriesProvider } from './contexts/categories.context'
import { CartItemProvider } from './contexts/cartItem.context'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartItemProvider>
            <App />
          </CartItemProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
