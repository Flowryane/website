import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Route, NavLink, HashRouter } from 'react-router-dom'
import logo from './logo_web.svg'
import Home from './Home'
import Stuff from './Stuff'
import Contact from './Contact'

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="App-logo">
            <img className="bounceOutUp" src={logo} alt="logo" />
            {/* <h1>Flowryane</h1> */}
          </div>
          <div className="contentHead">
            <ul className="header">
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/stuff">Stuff</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>
          <div className="footer">
            <ul className="icon">
              <a href="https://www.linkedin.com/in/floriane-erceau-861226143/">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              <a href="https://www.instagram.com/flowryane/">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="https://github.com/Flowryane">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </ul>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Main
library.add(fab, faCheckSquare, faCoffee)
