import Header from '../../shared/ui/Header/Header'
import css from './MainLayout.module.css'

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <>
     <Header/>
     <div className={`${css.contentWrap} container`}>
      {children}
      </div> 
    </>
  )
}

export default MainLayout
