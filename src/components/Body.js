import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinAlt } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown, faBook, faLink, faMapMarkerAlt, faAt } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { getData } from '../actions/actions';
import ReposListItem from './ReposListItem'

library.add(faGrinAlt, faCaretDown, faBook, faLink, faMapMarkerAlt, faAt)

class Body extends Component {
  componentDidMount() {
    getData()
  }

  render() {
    return (
      <div id="outerBodyContainer">
        <div id="innerBodyContainer">
          <div id="userColumn" className="flexColumn">
            <div id="profilePicAndStatus">
              <div id="profilePic" style={{backgroundImage: "url(" + this.props.profilePic + ")"}}></div>
              <div id="profileStatus">
                <p>Set your status</p>
                <div id="smileyIcon">
                  <FontAwesomeIcon icon={faGrinAlt} />
                </div>
              </div>
            </div>
            <div id="userNames">
              <h3>{this.props.name}</h3>
              <h4>{this.props.username}</h4>
            </div>
            <div id="moreDetails">
              <div className="detailLine">
                <div className="detailIcon"><FontAwesomeIcon icon={faAt} /></div>
                <a href="/">{this.props.email}</a>
              </div>
              <div className="detailLine">
                <div className="detailIcon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                <p>{this.props.location}</p>
              </div>
              <div className="detailLine">
                <div className="detailIcon"><FontAwesomeIcon icon={faLink} /></div>
                <a href="/">{this.props.htmlURL}</a>
              </div>
            </div>
            <div id="editButton">
              <button type="button" onClick={this.checkProps}>Edit</button>
            </div>
          </div>
          <div id="reposColumn" className="flexColumn">
            <nav id="reposNav">
              <a href="/" className="unselectedRepoNav">Overview</a>
              <a href="/" className="selectedRepoNav">Repositories&nbsp;<span>{this.props.numRepos}</span></a>
              <a href="/" className="unselectedRepoNav">Projects&nbsp;<span>0</span></a>
              <a href="/" className="unselectedRepoNav">Stars&nbsp;<span>0</span></a>
              <a href="/" className="unselectedRepoNav">Followers&nbsp;<span>0</span></a>
              <a href="/" className="unselectedRepoNav">Following&nbsp;<span>0</span></a>
            </nav>
            <div id="reposSearch">
              <input type="text" placeholder="Find a repository..." />
              <button className="typeButton" type="button"><span className="dropCategory">Type:</span> All <FontAwesomeIcon icon={faCaretDown} /></button>
              <button className="languageButton" type="button"><span className="dropCategory">Language:</span> All <FontAwesomeIcon icon={faCaretDown} /></button>
              <button className="newButton" type="button"><FontAwesomeIcon icon={faBook} /> New</button>
            </div>
            <div id="reposList" className="flexColumn">
              {
                this.props.reposData.map((repo, index) => {
                  return <ReposListItem key={"repo" + index} repo={repo} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    profilePic: appState.userData.avatar_url,
    username: appState.userData.login,
    name: appState.userData.name,
    numRepos: appState.userData.public_repos,
    htmlURL: appState.userData.html_url,
    location: appState.userData.location,
    email: appState.userData.email,
    reposData: appState.reposData
  }
}

export default connect(mapStateToProps)(Body);