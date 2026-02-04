import css from './SideBar.module.css'

interface SideBarProps {
  sidebarOpen: boolean,
  children: React.ReactNode
}
const SideBar = ({sidebarOpen, children}: SideBarProps) => {
  return (
    <div className={`${css.sidebarWrap} ${sidebarOpen && css.isOpen}`}>
      {children}
    </div>
  )
}

export default SideBar
