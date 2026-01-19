import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import { Suspense } from "react"
import PlantsPage from "./pages/PlantsPage/PlantsPage"

function App() {
  
  return (
  <Suspense fallback={<div>Loading page...</div>}>
    <MainLayout>
      <Routes>
        <Route path="/" element={<PlantsPage/>}/>
      </Routes>
    </MainLayout>
    </Suspense>
  )
}

export default App
