import SignUpForm from '../../components/sign-up-form/signupform.component'

import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import { AuthenticationContainer } from './authentcation.styles'
import { Fragment } from 'react/cjs/react.production.min'

const Authentication = () => {
  return (
    <Fragment>
      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
    </Fragment>
  )
}

export default Authentication
