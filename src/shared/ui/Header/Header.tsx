import { NavLink } from 'react-router-dom'
import css from './Header.module.css'

const Header = () => {
  return (
    <div className={`${css.header} container`}>
      <NavLink to={"/auth/signin"} >Sign in</NavLink>
    </div>
  )
}

export default Header
