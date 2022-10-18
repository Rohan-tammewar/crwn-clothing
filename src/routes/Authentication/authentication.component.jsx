import SignUpForm from '../../components/sign-up-form/signupform.component'

import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import './authentcation.styles.scss'
import { Fragment } from 'react/cjs/react.production.min'

const Authentication = () => {
  return (
    <Fragment>
      <div class="authentication-container">
        <h1>Sign In Page</h1>
        <SignInForm />
        <SignUpForm />
      </div>
    </Fragment>
  )
}

export default Authentication
