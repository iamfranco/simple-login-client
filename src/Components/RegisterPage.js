import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"

function RegisterPage() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [errorMsg, setErrorMsg] = useState({ show: false })

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URI}/register`,
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
          setErrorMsg({
            show: true,
            msg: res.data.message
          })
        } else {
          window.location.href = "/"
        }
      })
  }

  return (
    <div className="max-width-container">
      <Link to="/">
        <div className="back-button"></div>
      </Link>
      <div className="bigHeader">SIGN UP</div>
      <div className="formError">{errorMsg.show ? errorMsg.msg : null}</div>
      <form action="" method="post">
        <input onChange={e => setUsername(e.target.value)} type="text" name="username" placeholder="username" className="wide-text-input" autoFocus />
        <input onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="password" className="wide-text-input" />
        <p className="terms">
          By signing up, you agree to Simple Login's <span>Terms of Service</span> and <span>Privacy Policy</span>
        </p>
        <button onClick={handleSubmit} className="wide-button">
          SIGN UP
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
