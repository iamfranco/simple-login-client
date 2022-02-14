import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"

function RegisterPage() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .post(
        "http://localhost:5000/register",
        {
          username: username,
          password: password
        },
        {
          withCredentials: true
        }
      )
      .then(res => {
        if (!res.data.success) {
          window.location.href = "/register"
        } else {
          window.location.href = "/"
        }
      })
  }

  return (
    <div className="container">
      <Link to="/">
        <div className="back-button"></div>
      </Link>
      <div className="bigHeader">SIGN UP</div>
      <form action="" method="post">
        <input onChange={e => setUsername(e.target.value)} type="text" name="username" placeholder="username" className="wide-text-input" />
        <input onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="password" className="wide-text-input" />
        <p className="terms">
          By signing up, you agree to Dot the Box's <span>Terms of Service</span> and <span>Privacy Policy</span>
        </p>
        <button onClick={handleSubmit} className="wide-button">
          SIGN UP
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
