// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {iplDetails} = this.props
    const {id, name, teamImageUrl} = iplDetails
    return (
      <Link to={`/teams/:${id}`}>
        <li className="team-card-container">
          <img className="team-logo" src={teamImageUrl} alt={name} />
          <h1 className="team-name">{name}</h1>
        </li>
      </Link>
    )
  }
}

export default TeamCard
