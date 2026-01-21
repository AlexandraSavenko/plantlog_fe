import { Link } from 'react-router-dom'
import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={css.notFoundPage}>
      404
      <p>Sorry, something went wrong</p>
      <Link to={"/"}>Go back to main page</Link>
    </div>
  )
}

export default NotFoundPage
