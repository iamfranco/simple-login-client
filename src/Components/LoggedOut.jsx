import React from "react"
import { Link } from "react-router-dom"
import googleLogo from "./../assets/googleLogo.png"
import styles from "./../styles/LoggedOut.module.css"

function LoggedOut() {
  return (
    <div className="container" id={styles.loggedOut}>
      <div className={styles.verticalCenter}>
        <div className={styles.appName}>Dot the Box</div>

        <Link to="/login">
          <div className="wide-button">LOG IN</div>
        </Link>
        <Link to="/register">
          <div className="wide-button transparent-button">REGISTER</div>
        </Link>

        <div className={styles.orContainer}>
          <div className={styles.line}></div>
          <div className={styles.or}>Or</div>
          <div className={styles.line}></div>
        </div>

        <div className="wide-button" id={styles.googleButton}>
          <img src={googleLogo} alt="" className={styles.googleLogo} />
          <div className={styles.googleText}>Sign in with Google</div>
        </div>
      </div>
    </div>
  )
}

export default LoggedOut
