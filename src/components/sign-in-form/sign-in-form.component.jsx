import FormInput from '../form-input/form-input.component'
import { useState } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import './sign-in-forms.styles'
import { SignInFormContainer } from './sign-in-forms.styles'

const SignInForm = () => {
  const logGoogleUser = async function () {
    await signInWithGooglePopup()
  }

  const defaultFormFields = {
    email: '',
    password: '',
  }
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const handleChnage = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      switch (error.code.toLowerCase()) {
        case '*auth/wrong-password*':
          alert('Wrong password')
          break
        case 'auth/user-not-found':
          alert('No user with this email')
          break
        default:
          console.log(error)
      }
    }
  }
  return (
    <SignInFormContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChnage}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChnage}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            onClick={logGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </SignInFormContainer>
  )
}

export default SignInForm
