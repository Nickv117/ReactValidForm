import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Form from "./Form"
import Submitted from "./Submitted"
import "../styles/Form.css"

export default props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Form} />
        <Route path="/Submitted" component={Submitted} />
      </div>
    </Router>
  )
}
