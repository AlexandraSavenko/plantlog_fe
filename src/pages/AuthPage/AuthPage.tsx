import { useParams } from 'react-router-dom'
import css from './AuthPage.module.css'
import SigninForm from '../../features/auth/components/SignInForm/SignInForm'
import SignUpForm from '../../features/auth/components/SignUpForm/SignUpForm'

const AuthPage = () => {
    const {authType} = useParams()
  return (
    <div className={css.authPage}>
      {authType === "signin" && <SigninForm/>}
      {authType === "signup" && <SignUpForm/>}
    </div>
  )
}

export default AuthPage
