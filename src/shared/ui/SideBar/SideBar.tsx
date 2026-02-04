import css from './SideBar.module.css'

const SideBar = ({sidebarOpen}: {sidebarOpen: boolean}) => {
  return (
    <div className={`${css.sidebarWrap} ${sidebarOpen && css.isOpen}`}>
      
    </div>
  )
}

export default SideBar
