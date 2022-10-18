import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/signupform.component'

const SignIn = () => {
  //The issue with redirect is that it does not execute anything after the redirect code

  const logGoogleUser = async function () {
    const userData = await signInWithGooglePopup()
    const data = await createUserDocumentFromAuth(userData.user)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With google popup</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
