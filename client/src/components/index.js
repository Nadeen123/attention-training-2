import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import ProgressBar from "./sharedComponent/ProgressBar"
import Dashboard from "../components/Dashboard"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz-instructions" component={ProgressBar} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default Routes
