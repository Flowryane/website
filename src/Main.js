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
          <div className="contentHead">
            <ul className="header">
              <li>
                <img className="bounceOutUp" src={logo} alt="logo" />
              </li>
              <li>
                <NavLink exact to="/" activeStyle={{
                  fontWeight: "bold",
                  color: "#dc0a4e"}}>
                  home
                </NavLink>
              </li>
              <li>
                <NavLink to="/stuff" activeStyle={{
                  fontWeight: "bold",
                  color: "#dc0a4e"}}>
                  stuff
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeStyle={{
                  fontWeight: "bold",
                  color: "#dc0a4e"}}>
                  contact
                </NavLink>
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
