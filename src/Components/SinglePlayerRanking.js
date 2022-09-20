import React from 'react';
import Player from './Player';
import './SinglePlayerRanking.css';

const SinglePlayerRanking = ({ players }) => {
  return (
    <div className="single-container container">
      {players.map((player, index) => {
        return <Player key={index} index={index} player={player} />;
      })}
    </div>
  );
};
export default SinglePlayerRanking;
