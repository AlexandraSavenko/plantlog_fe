import Header from '../../shared/ui/Header/Header'
import css from './MainLayout.module.css'

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div className={`${css.layout} container`}>
     <Header/>
     <div className={css.contentWrap}>
      {children}
      </div> 
    </div>
  )
}

export default MainLayout
