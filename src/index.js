import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./components/App"
import {createStore,applyMiddleware} from "redux"
import reducers from "./reducers"
import reduxPromise from "redux-promise"
import "./index.css"

const store=createStore(reducers,applyMiddleware(reduxPromise))


ReactDOM.render(
    <Router>
    <Provider store={store}>
<App/>
</Provider>
</Router>
,document.getElementById("root"))