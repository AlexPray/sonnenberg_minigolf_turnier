import React from 'react';
import './Player.css';

const Player = ({ player, index }) => {
  return (
    <div className="player-container">
      <div className="rank">
      <p>{index + 1}</p>
      </div>
      <div className="firstname">
        <p>{player.vorname}</p>
        </div>
      <div className="points">
      <p>{player.punkte}</p>
      </div>
    </div>
  );
};

export default Player;
