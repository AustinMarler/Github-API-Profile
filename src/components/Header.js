import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBell, faPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

library.add(faGithub, faBell, faPlus,faCaretDown)

class Header extends Component {
  render() {
    return (
      <div id="headerContainer">
        <header id="header">
          <div id="headerLogo" className="headerItem">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div id="headerSearch" className="headerItem">
            <input type="text" placeholder="Search or jump to..." />
            <img alt="" src="https://github.githubassets.com/images/search-key-slash.svg"></img>
          </div>
          <div id="headerNav" className="headerItem">
            <nav>
              <a href="/">Pull requests</a>
              <a href="/">Issues</a>
              <a href="/">Marketplace</a>
              <a href="/">Explore</a>
            </nav>
          </div>
          <div id="headerOther">
            <div id="notifications" className="headerOtherItem">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div id="createNewDropDown" className="headerOtherItem">
              <FontAwesomeIcon icon={faPlus} />
              &nbsp;
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div id="profileDropDown" className="headerOtherItem">
              <div id="headerProfileImage" style={{backgroundImage: "url(" + this.props.userThumbnail + ")"}}></div>
              &nbsp;
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        </header>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    userThumbnail: appState.userData.avatar_url
  }
}

export default connect(mapStateToProps)(Header);