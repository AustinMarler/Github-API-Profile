import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub)

class Footer extends Component {
  render() {
    return (
      <div id="footerContainer">
        <div id="footerInner">
          <div id="footerLeft">
            <p>&#169; 2019 Github, Inc.</p>
            <a href="/">Terms</a>
            <a href="/">Privacy</a>
            <a href="/">Security</a>
            <a href="/">Status</a>
            <a href="/">Help</a>
          </div>
          <div id="footerIcon">
            <FontAwesomeIcon icon={faGithub} />
            </div>
          <div id="footerRight">
            <a href="/">Contact Github</a>
            <a href="/">Pricing</a>
            <a href="/">API</a>
            <a href="/">Training</a>
            <a href="/">Blog</a>
            <a href="/">About</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer