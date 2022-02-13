import React from "react"
import { Link } from "react-router-dom"
import styles from "./../styles/RegisterPage.module.css"

function RegisterPage() {
  return (
    <div className="container">
      <Link to="/">
        <div className="back-button"></div>
      </Link>
      <div className="bigHeader">SIGN UP</div>
      <input type="text" name="username" placeholder="username" className="wide-text-input" />
      <input type="password" name="password" placeholder="password" className="wide-text-input" />
      <p className={styles.terms}>
        By signing up, you agree to Dot the Box's <span>Terms of Service</span> and <span>Privacy Policy</span>
      </p>
      <div className="wide-button">SIGN UP</div>
    </div>
  )
}

export default RegisterPage
