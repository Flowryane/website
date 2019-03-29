import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>STACK</h2>
        <p></p>
        <ul>
          <li><FontAwesomeIcon icon={['fab', 'html5']} /></li>
          <li><FontAwesomeIcon icon={['fab', 'css3']} /></li>
          <li><FontAwesomeIcon icon={['fab', 'sass']} /></li>
          <li><FontAwesomeIcon icon={['fab', 'react']} /></li>
          <li><FontAwesomeIcon icon={['fab', 'adobe']} /></li>
          <li><FontAwesomeIcon icon={['fab', 'git']} /></li>
          <li><FontAwesomeIcon icon={['fab', 'docker']} /></li>
        </ul>
      </div>
    );
  }
}
 
export default Stuff;
library.add(fab, faCheckSquare, faCoffee)