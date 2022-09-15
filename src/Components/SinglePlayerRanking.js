import React from 'react';
import './SinglePlayerRanking.css';
import RankedPlayer from './RankedPlayer';

const SinglePlayerRanking = ({ players }) => {
  return (
    <div className="single-container container">
      {players.map((player, index) => {
        return <RankedPlayer key={index} index={index} player={player} />;
      })}
    </div>
  );
};
export default SinglePlayerRanking;
