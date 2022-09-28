import React from 'react';
import './PlayerSmall.css';

const Player = ({ player}) => {
    console.log(player);
    if (player !== undefined) {
        return (
          <div className="playerSmall-container">
            <div className="playerSmall-firstname">
              <p>{player.spielername}</p>
              </div>
            <div className="playerSmall-points">
            <p>{player.punkte}</p>
            </div>
          </div>
        );
    }
};

export default Player;
