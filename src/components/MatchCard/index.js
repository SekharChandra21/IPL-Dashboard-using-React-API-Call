// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchDetails} = this.props
    // console.log(matchDetails)
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails
    return (
      <li className="match-item-container">
        <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
        <p className="match-item-heading">{competingTeam}</p>
        <p>{result}</p>
        <p
          className={
            matchStatus === 'Won' ? 'match-status-won' : 'match-status-lost'
          }
        >
          {matchStatus}
        </p>
      </li>
    )
  }
}

export default MatchCard
