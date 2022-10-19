import FormInput from '../form-input/form-input.component'
import { useState } from 'react'
import Button from '../button/button.component'
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import './sign-in-forms.styles.scss'

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
        case 'auth/wrong-passsword':
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
    <div className="sign-in-form-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          required
          name="email"
          onChange={handleChnage}
          value={email}
        />
        <FormInput
          label="password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChnage}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={logGoogleUser} buttonType="google">
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
