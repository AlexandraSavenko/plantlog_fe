import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import { Suspense } from "react"
import PlantsPage from "./pages/PlantsPage/PlantsPage"
import AuthPage from "./pages/AuthPage/AuthPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

function App() {
  
  return (
  <Suspense fallback={<div>Loading page...</div>}>
    <MainLayout>
      <Routes>
        <Route path="/" element={<PlantsPage/>}/>
        <Route path="/auth/:authType" element={<AuthPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </MainLayout>
    </Suspense>
  )
}

export default App
