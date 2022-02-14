import axios from "axios"
import React, { useContext } from "react"
import { myContext } from "../Context"

function Homepage() {
  const context = useContext(myContext)

  function handleLogout() {
    axios
      .get("http://localhost:5000/logout", {
        withCredentials: true
      })
      .then(res => {
        if (res.data === "logged out") {
          window.location.href = "/"
        }
      })
  }

  return (
    <div className="container">
      <div className="bigHeader">
        Welcome back <strong>{context.displayName}</strong>
      </div>
      <div onClick={handleLogout} className="wide-button">
        LOG OUT
      </div>
    </div>
  )
}

export default Homepage
