// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const rawId = params.id
    const id = rawId.replace(':', '')

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(item => ({
        umpires: item.umpires,
        result: item.result,
        manOfTheMatch: item.man_of_the_match,
        id: item.id,
        date: item.date,
        venue: item.venue,
        competingTeam: item.competing_team,
        competingTeamLogo: item.competing_team_logo,
        firstInnings: item.first_innings,
        secondInnings: item.second_innings,
        matchStatus: item.match_status,
      })),
    }
    this.setState({teamData: updatedData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state
    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            {teamData.teamBannerUrl && (
              <img
                src={teamData.teamBannerUrl}
                alt="team banner"
                style={{width: '100%', marginBottom: '20px'}}
              />
            )}
            <LatestMatch teamDetails={teamData} />
            <ul className="match-cards-container">
              {teamData.recentMatches &&
                teamData.recentMatches.map(eachItem => (
                  <MatchCard key={eachItem.id} matchDetails={eachItem} />
                ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
