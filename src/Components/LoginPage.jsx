import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function LoginPage() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [errorMsg, setErrorMsg] = useState({ show: false })

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .post(
        "http://localhost:5000/login",
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
            msg: "Incorrect username or password"
          })
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
      <div className="bigHeader">Log In</div>
      <div className="formError">{errorMsg.show ? errorMsg.msg : null}</div>
      <form action="" method="post">
        <input onChange={e => setUsername(e.target.value)} type="text" name="username" placeholder="username" className="wide-text-input" />
        <input onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="password" className="wide-text-input" />
        <button onClick={handleSubmit} className="wide-button" type="submit">
          LOG IN
        </button>
      </form>
    </div>
  )
}

export default LoginPage
