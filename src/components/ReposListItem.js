import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Moment from 'moment'

library.add(faStar)

class ReposListItem extends Component {
  render() {
    return (
      <div className="reposListItem">
        <div className="repoLeftSide">
          <div id="repoTitleDiv">
            <p>{this.props.repo.name}</p>
          </div>
          <div id="repoDetails">
            <div className={this.props.repo.language}></div>
            &nbsp;
            <p>{this.props.repo.language}</p>
            &nbsp;&nbsp;&nbsp;
            <p>Updated {Moment(this.props.repo.updated_at).startOf('day').fromNow()}</p>
          </div>
        </div>
        <div className="repoRightSide">
          <div id="starButton">
            <button type="button"><FontAwesomeIcon icon={faStar} /> Star</button>
          </div>
          <div id="activityBar"></div>
        </div>
      </div>
    )
  }
}

export default ReposListItem