import { useState } from 'react';
import Header from '../../shared/ui/Header/Header'
import SideBar from '../../shared/ui/SideBar/SideBar';
import css from './MainLayout.module.css'
import PlantFilters from '../../features/plants/components/PlantFilters/PlantFilters';

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className={`${css.layout} container`}>
     <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)}/>
     <SideBar sidebarOpen={sidebarOpen}>
      <PlantFilters/>
      </SideBar>
     <div className={css.contentWrap}>
      {children}
      </div> 
    </div>
  )
}

export default MainLayout
