import React from 'react';
import Team from './Team';
import './TeamRanking.css';

const TeamRanking = ({ players }) => {
  let teams = new Map();

  // Deklaration / Definition
  class teamObj {
    constructor(teamName, teamId) {
      this.teamName = teamName;
      this.teamId = teamId;
      this.players = [];
      this.teamPoints = 0;
    }
    addPlayer(player) {
      this.players.push(player);
      // Spieler Sortieren
      this.players.sort((a, b) => a.punkte - b.punkte);
      // TeamPunkte berechnen
      this.calcPoints();
    }
    calcPoints() {
      this.teamPoints = 0;
      this.players.forEach((player) => {
        this.teamPoints += player.punkte;
      });
    }
  }

  const buildTeams = () => {
    // Abfüllen
    teams = new Map();
    players.forEach((player) => {
      if (teams.has(player.teamId)) {
        teams.get(player.teamId).addPlayer(player);
      } else {
        const newTeam = new teamObj(player.team, player.teamId);
        teams.set(player.teamId, newTeam);
        newTeam.addPlayer(player);
      }
    });

    // Sortieren
    if ([...teams][1] !== undefined) {
      teams = new Map(
        [...teams.entries()].sort((a, b) => a[1].teamPoints - b[1].teamPoints)
      );
    }
  };

  if (teams.size === 0) {
    buildTeams();
  }


  return (
    <div className="team-container container">
      {teams !== undefined &&
        [...teams].map((team, index) => {
          return <Team key={index} index={index} team={team} />;
        })}
    </div>
  );
};

export default TeamRanking;
