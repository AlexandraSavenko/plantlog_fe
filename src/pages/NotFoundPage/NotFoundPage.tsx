import { Link } from 'react-router-dom'
import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={css.notFoundPage}>
      <img src="/noPlantsBG.png" alt="there are no plants here" />
      <div className={css.messageWrap}>
       <p>404</p>
      <p>Sorry, something went wrong</p>
      <Link to={"/"}>Go back to main page</Link> 
      </div>
      
    </div>
  )
}

export default NotFoundPage
