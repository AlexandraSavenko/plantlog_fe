import { Navigate } from 'react-router-dom';

interface RestrictedRouteProps {
    isAuth: boolean;
    redirectTo: string;
    children: React.ReactNode
}
const RestrictedRoute = ({isAuth, redirectTo, children}: RestrictedRouteProps) => {
  return isAuth ? children : <Navigate to={redirectTo}/>  
}

export default RestrictedRoute
