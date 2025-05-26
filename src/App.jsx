import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router'
import MainLayout from './layout/MainLayout'

function App() {

  return (
    <>  
     <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>

        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
