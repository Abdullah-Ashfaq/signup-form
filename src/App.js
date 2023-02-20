import React, { createContext } from 'react'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
// import { useNavigate } from 'react-router-dom'



export const MyContext = createContext()

const App = () => {
  

// const[auth, setAuth] = useState(true)
// setAuth(true)



  return (
    <>

    {/* <MyContext.Provider value={auth}> */}

    
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>} />

      



      </Routes>
    </Router>
    {/* </MyContext.Provider> */}
    
    
    </>
  )
}

export default App