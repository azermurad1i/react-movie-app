import React, { Component } from 'react'
import {Route,Switch} from "react-router-dom"
import Home from "../containers/Home"
import Details from "../containers/Details"


export default class App extends Component {

    render() {
        return (
          <>
         
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/details/:id" exact component={Details}></Route>
          </Switch>
         
          </>
        )
    }
}
