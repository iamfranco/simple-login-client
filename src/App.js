import React, { useContext } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoggedOut from "./Components/LoggedOut"
import Homepage from "./Components/Homepage"
import LoginPage from "./Components/LoginPage"
import RegisterPage from "./Components/RegisterPage"
import "./GlobalStyles.css"
import { myContext } from "./Context"

function App() {
  const context = useContext(myContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={context ? <Homepage /> : <LoggedOut />} />
        <Route path="/login" element={context ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/register" element={context ? <Navigate to="/" /> : <RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
