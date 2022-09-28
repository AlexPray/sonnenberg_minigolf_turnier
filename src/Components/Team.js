import React from 'react';
import PlayerSmall from './PlayerSmall'
import './Team.css';

const Team = ({ team, index }) => {
  let teamMembers = team[1].players

  if (team !== undefined) {
    return (
      <div className="team-container">
        <div className="team-card">
          <div className="team-rank">
            <p>{index + 1}</p>
          </div>
          <div className="team-name">
            <p>{team[1].teamName}</p>
          </div>
          <div className="team-points">
            <p>{team[1].teamPoints} <span className='not-bold'>Schläge</span></p>
          </div>
        </div>
        <div className="team-members-container">
        {teamMembers !== undefined &&
        teamMembers.map((player, index) => {
          console.log(player);
          return <PlayerSmall key={index} player={player} />;
        })}
        </div>
      </div>
    );
  }
};

export default Team;
