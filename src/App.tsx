import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import { Suspense } from "react"

function App() {
  
  return (
  <Suspense fallback={<div>Loading page...</div>}>
    <MainLayout>
      <Routes>
        <Route path="/" element={}/>
      </Routes>
    </MainLayout>
    </Suspense>
  )
}

export default App
