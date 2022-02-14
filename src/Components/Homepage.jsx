import React, { useContext } from "react"
import { myContext } from "../Context"
import Header from "./Header"
import styles from "./../styles/Homepage.module.css"
import axios from "axios"
import produce from "immer"

function Homepage() {
  const { userObject, setUserObject } = useContext(myContext)

  function plusOne() {
    modifyNumber(userObject.someNumber + 1)
  }

  function minusOne() {
    modifyNumber(userObject.someNumber - 1)
  }

  function modifyNumber(newNumber) {
    const nextUserObject = produce(userObject, draft => {
      draft.someNumber = newNumber
    })
    setUserObject(nextUserObject)

    axios
      .post(
        "http://localhost:5000/setUser",
        {
          someNumber: newNumber
        },
        {
          withCredentials: true
        }
      )
      .then(res => {
        console.log(res.data)
      })
  }

  return (
    <>
      <Header />
      <div className="belowHeader">
        <div className="bigHeader">Homepage</div>
        <div>
          Your number is currently <strong>{userObject.someNumber}</strong>.
        </div>
        <div className={styles.halfButtonContainer}>
          <div onClick={minusOne} className={styles.button}>
            -1
          </div>
          <div onClick={plusOne} className={styles.button}>
            +1
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
