import React from "react"
import { Link } from "react-router-dom"

function LoginPage() {
  return (
    <div className="container">
      <Link to="/">
        <div className="back-button"></div>
      </Link>
      <div className="bigHeader">Log In</div>

      <input type="text" name="username" placeholder="username" className="wide-text-input" />
      <input type="password" name="password" placeholder="password" className="wide-text-input" />
      <div className="wide-button">LOG IN</div>
    </div>
  )
}

export default LoginPage
