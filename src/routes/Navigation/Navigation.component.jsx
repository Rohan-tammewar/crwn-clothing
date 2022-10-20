import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as CrwnLogo } from '../../asset/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import './Navigation.styles.scss'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartItemContext } from '../../contexts/cartItem.context'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { cartVisible } = useContext(CartItemContext)
  console.log(cartVisible)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {cartVisible && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation
