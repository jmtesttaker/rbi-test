import React from 'react';
import { hydrate, render } from "react-dom"
import { connect, Provider } from "react-redux"
import App from './router'
import Store from './stores'
Store.dispatch({type:'api/refreshAll'})


const root = document.getElementById("root")
var renderMethod
if (root && root.innerHTML !== "") {
  renderMethod = hydrate
} else {
  renderMethod = render
}

const contextStore = React.createContext()
const mapStateToProps = state => {
    return {
        state
    }
}

const NewApp = connect(mapStateToProps, null, null, {context: contextStore })(App)

renderMethod(<Provider store={Store} context={contextStore}><NewApp /></Provider>, document.getElementById('root'));
