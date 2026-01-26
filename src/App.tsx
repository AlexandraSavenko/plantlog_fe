import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import { Suspense, useEffect } from "react"
import PlantPage from "./pages/PlantPage/PlantPage"
import AuthPage from "./pages/AuthPage/AuthPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import { useSelector } from "react-redux"
import { selectIsSignedIn } from "./redux/auth/selectros"
import RestrictedRoute from "./shared/routing/RestrictedRoute"
import ProfilePage from "./pages/ProfilePage/ProfilePage"

function App() {
  const isAuth = useSelector(selectIsSignedIn)
  useEffect(() => {console.log(isAuth)}, [isAuth])
  return (
  <Suspense fallback={<div>Loading page...</div>}>
    <MainLayout>
      <Routes>
        <Route path="/" element={<PlantPage/>}/>
        <Route path="/auth/:authType" element={<AuthPage/>}/>
        <Route path="/profile/:plantType" element={
          <RestrictedRoute isAuth={isAuth} redirectTo="/auth/signin">
            <ProfilePage/>
          </RestrictedRoute>
        }/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </MainLayout>
    </Suspense>
  )
}

export default App
