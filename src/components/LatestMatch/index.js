// Write your code here
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {teamDetails} = this.props

    console.log(teamDetails)
    const {latestMatchDetails} = teamDetails
    return (
      <div>
        {latestMatchDetails && (
          <>
            <h1 className="latest-match">Latest Match</h1>
            <div className="latest_match_details">
              <div className="match-headers">
                <p className="compet-heading">
                  {latestMatchDetails.competingTeam}
                </p>
                <p className="date">{latestMatchDetails.date}</p>
                <p className="venue">{latestMatchDetails.venue}</p>
                <p className="result">{latestMatchDetails.result}</p>
              </div>
              <img
                className="latest-match-image"
                src={latestMatchDetails.competingTeamLogo}
                alt={`latest match ${latestMatchDetails.competingTeam}`}
              />
              <div className="innings">
                <h1 className="header">First Innings</h1>
                <p className="details">{latestMatchDetails.firstInnings}</p>
                <h1 className="header">second Innings</h1>
                <p className="details">{latestMatchDetails.secondInnings}</p>
                <h1 className="header">Man Of The Match</h1>
                <p className="details">{latestMatchDetails.manOfTheMatch}</p>
                <h1 className="header">Umpires</h1>
                <p className="details">{latestMatchDetails.umpires}</p>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default LatestMatch
