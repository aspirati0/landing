import { AppStateProvider } from './store' 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './teleporthq/style.css'
import Video from './teleporthq/pages/video'
import Components from './teleporthq/pages/components'
import Demo from './teleporthq/pages/demo'
import Home from './teleporthq/pages/home'

const App = () => {
  return (
    <Router>
      <AppStateProvider>
        <Route component={Video} exact path="/video" />
        <Route component={Components} exact path="/components" />
        <Route component={Demo} exact path="/demo" />
        <Route component={Home} exact path="/" />
      </AppStateProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
