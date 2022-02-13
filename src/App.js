import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoggedOut from "./Components/LoggedOut"
import Homepage from "./Components/Homepage"
import LoginPage from "./Components/LoginPage"
import RegisterPage from "./Components/RegisterPage"
import "./GlobalStyles.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoggedOut />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
