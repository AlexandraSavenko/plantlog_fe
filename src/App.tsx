import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import { Suspense } from "react"
import PlantPage from "./pages/PlantPage/PlantPage"
import AuthPage from "./pages/AuthPage/AuthPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

function App() {
  
  return (
  <Suspense fallback={<div>Loading page...</div>}>
    <MainLayout>
      <Routes>
        <Route path="/" element={<PlantPage/>}/>
        <Route path="/auth/:authType" element={<AuthPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </MainLayout>
    </Suspense>
  )
}

export default App
