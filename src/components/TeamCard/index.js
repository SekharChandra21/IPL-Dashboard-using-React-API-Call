// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {iplDetails} = this.props
    const {id, name, teamImageUrl} = iplDetails
    return (
      <Link key={id} to={`/team-matches/:${id}`}>
        <li className="team-card-container">
          <img className="team-logo" src={teamImageUrl} alt={name} />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
