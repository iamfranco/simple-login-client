import React, { createContext, useEffect, useState } from "react"
import axios from "axios"

export const myContext = createContext({})
function Context(props) {
  const [userObject, setUserObject] = useState()

  useEffect(() => {
    axios.get("http://localhost:5000/getuser", { withCredentials: true }).then(res => {
      if (res.data) {
        setUserObject({
          displayName: res.data.displayName,
          googleId: res.data.googleId,
          username: res.data.username,
          someNumber: res.data.someNumber
        })
      }
    })
  }, [])

  return <myContext.Provider value={{ userObject, setUserObject }}>{props.children}</myContext.Provider>
}

export default Context
