import {
  signInWithGooglePopup,
  createuserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async function () {
    const userData = await signInWithGooglePopup()
    const data = await createuserDocumentFromAuth(userData)
    console.log(data)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With google</button>
    </div>
  )
}

export default SignIn
