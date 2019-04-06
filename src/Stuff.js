import React, { Component, Fragment } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Image } from 'react-bootstrap'
import logo from './logo_web.svg'

class Stuff extends Component {
  render() {
    return (
      <Fragment>
        <div className="stack">
          <div>
          <FontAwesomeIcon icon={['fab', 'html5']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'css3']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'bootstrap']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'sass']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'js']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'react']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'node']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'github']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'gitlab']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'meetup']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'npm']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'yarn']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'adobe']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'invision']} />
          </div>
          <div>
          <FontAwesomeIcon icon={['fab', 'node']} />
          </div>
        </div>
      </Fragment>
    );
  }
}
 
export default Stuff;
library.add(fab, faCheckSquare, faCoffee, faBootstrap)
