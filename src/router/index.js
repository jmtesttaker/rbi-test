import React from "react"
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom"
import HeaderLayout from '../layout/HeaderLayout'
import HomePage from '../pages/index'
import ShowPage from '../pages/show'
import history from './history'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <HeaderLayout />
        <Router history={history} path='/'>
            <Switch>
              <Route path="/show" exact><ShowPage {...this.props} /></Route>
              <Route path="/"><HomePage {...this.props} /></Route>
            </Switch>
        </Router>
      </div>
    )
  }
}