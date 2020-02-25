import React, { useState } from "react"
import validator from "validator"
import "../styles/Form.css"

export default props => {
  const [fName, setFname] = useState("")
  const [fnameError, setfnameError] = useState("")
  const [lName, setLname] = useState("")
  const [lnameError, setlnameError] = useState("")
  const [Email, setEmail] = useState("")
  const [emailError, setemailError] = useState("")
  const [Username, setUsername] = useState("")
  const [usernameError, setusernameError] = useState("")
  const [Password, setPassword] = useState("")
  const [passwordError, setpasswordError] = useState("")
  const [Cpassword, setCPassword] = useState("")
  const [cpasswordError, setcpasswordError] = useState("")
  const [Website, setWebsite] = useState("")
  const [websiteError, setwebsiteError] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    let valid = true

    if (fName === "") {
      valid = false
      setfnameError("You've got a name don't you?")
    } else {
      setfnameError("")
    }
    if (lName === "") {
      valid = false
      setlnameError("You've got a name don't you?")
    } else {
      setlnameError("")
    }
    if (!validator.isEmail(Email)) {
      valid = false
      setemailError("Must be a valid email address!")
    } else {
      setemailError("")
    }
    if (Username === "") {
      valid = false
      setusernameError("Cannot be blank, have a nickname?")
    } else {
      setusernameError("")
    }
    if (Password === "") {
      valid = false
      setpasswordError("Cannot leave field blank.")
    } else {
      setpasswordError("")
    }
    if (Cpassword === "") {
      valid = false
      setcpasswordError("Cannot leave field blank.")
    } else {
      setcpasswordError("")
    }
    if (!validator.isURL(Website)) {
      valid = false
      setwebsiteError("Must be a valid URL!")
    } else {
      setwebsiteError("")
    }
    if (valid) {
      props.history.push("/Submitted")
    } else {
      alert("Something went wrong, or is missing!")
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label className={fnameError ? "error" : ""} htmlFor="fName">
          First Name {fnameError && fnameError}
        </label>
        <input
          type="text"
          id="fName"
          className={fnameError ? "error" : ""}
          placeholder="Enter First Name"
          value={fName}
          onChange={e => setFname(e.target.value)}
        />
        <br />
        <label className={lnameError ? "error" : ""} htmlFor="lName">
          Last Name {lnameError && lnameError}
        </label>
        <input
          type="text"
          id="lName"
          className={lnameError ? "error" : ""}
          placeholder="Enter Last Name"
          value={lName}
          onChange={e => setLname(e.target.value)}
        />
        <br />
        <label className={emailError ? "error" : ""} htmlFor="email">
          Email {emailError && emailError}
        </label>
        <input
          type="email"
          id="email"
          className={emailError ? "error" : ""}
          placeholder="somethingwitty@blandmail.com"
          value={Email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label className={usernameError ? "error" : ""} htmlFor="username">
          Username {usernameError && usernameError}
        </label>
        <input
          type="text"
          id="username"
          className={usernameError ? "error" : ""}
          placeholder="callsign123"
          value={Username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <label className={passwordError ? "error" : ""} htmlFor="password">
          Password {passwordError && passwordError}
        </label>
        <input
          type="password"
          id="password"
          className={passwordError ? "error" : ""}
          value={Password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <label className={passwordError ? "error" : ""} htmlFor="Cpassword">
          Confirm Password {cpasswordError && cpasswordError}
        </label>
        <input
          type="password"
          id="Cpassword"
          className={passwordError ? "error" : ""}
          value={Cpassword}
          onChange={e => setCPassword(e.target.value)}
        />
        <br />
        <label className={websiteError ? "error" : ""} htmlFor="website">
          Website {websiteError && websiteError}
        </label>
        <input
          type="text"
          id="website"
          className={websiteError ? "error" : ""}
          placeholder="http://example.com"
          value={Website}
          onChange={e => setWebsite(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
