import SignUpForm from '../../components/sign-up-form/signupform.component'

import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import './authentcation.styles.scss'
import { Fragment } from 'react/cjs/react.production.min'

const Authentication = () => {
  return (
    <Fragment>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </Fragment>
  )
}

export default Authentication
