import './App.css';
import Header from './components/header/Header.jsx';
import '@fontsource-variable/inter';
import GameTitle from './components/game/GameTitle.jsx';
import GameInfo from './components/game/GameInfo.jsx';
import GameField from './components/game/GameField.jsx';
import { useState } from 'react';
import useGameState from './components/game/useGameState.js';

export default function App() {
  const [playersCount] = useState(2);
  const { cells, currentMove, nextMove, handleCellClick } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen font-sans leading-normal">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo playersCount={playersCount} currentMove={currentMove} className="mt-4" />
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
        />
      </main>
    </div>
  );
}
