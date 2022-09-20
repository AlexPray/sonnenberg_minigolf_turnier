import React from 'react';
import './Team.css';

const Team = ({ team, index }) => {
  return (
    <div className="Team-container">
      <div className="team-rank">
        <p>{index + 1}</p>
      </div>
      <div className="team-name">
        <p>{team[1].teamName}</p>
      </div>
      <div className="team-points">
        <p>{team[1].teamPoints}</p>
      </div>
    </div>
  );
};

export default Team;
