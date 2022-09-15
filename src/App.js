import './App.css';
import { useEffect, useState } from 'react';
import useConentful from './API/useContentful';
import Navigation from './Components/Navigation';
import SinglePlayerRanking from './Components/SinglePlayerRanking';

function App() {
  const [players, setplayers] = useState([]);
  const { getPlayers } = useConentful();

  useEffect(() => {
    getPlayers().then((response) => setplayers(response));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Navigation />
      <SinglePlayerRanking players={players}/>
    </div>
  );
}

export default App;
