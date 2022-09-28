import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import useConentful from './API/useContentful';
import Navigation from './Components/Navigation';
import SinglePlayerRanking from './Components/SinglePlayerRanking';
import TeamRanking from './Components/TeamRanking';
import RulesAndPrize from './Components/RulesAndPrize';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const { getPlayers } = useConentful();

  useEffect(() => {
    getPlayers().then((response) => setPlayers(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/regeln-preise" element={<RulesAndPrize />} />
        <Route path="/" element={<RulesAndPrize />} />
        <Route
          path="/teamwertung"
          element={<TeamRanking players={players} />}
        />
        <Route
          path="/spielerwertung"
          element={<SinglePlayerRanking players={players} />}
        />
      </Routes>
    </div>
  );
}

export default App;
