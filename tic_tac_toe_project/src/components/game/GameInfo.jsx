import clsx from 'clsx';
import Profile from '../profile/Profile.jsx';
import GameSymbol1 from './GameSymbol1.jsx';
import { GAME_SYMBOLS } from './constants.js';
import avatarSrc1 from './images/avatar1.png';
import avatarSrc2 from './images/avatar2.png';
import avatarSrc3 from './images/avatar3.png';
import avatarSrc4 from './images/avatar4.png';
import { useEffect, useState } from 'react';

const players = [
  { id: 1, name: 'User3021', rating: 1203, symbol: GAME_SYMBOLS.CROSS, avatar: avatarSrc1 },
  { id: 2, name: 'User1309', rating: 850, symbol: GAME_SYMBOLS.ZERO, avatar: avatarSrc2 },
  { id: 3, name: 'User5023', rating: 1400, symbol: GAME_SYMBOLS.TRIANGLE, avatar: avatarSrc3 },
  { id: 4, name: 'User809', rating: 760, symbol: GAME_SYMBOLS.SQUARE, avatar: avatarSrc4 },
];

export default function GameInfo({ className, playersCount, currentMove }) {
  return (
    <div className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 justify-between')}>
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo key={player.id} playerInfo={player} index={index} isTimerRunning={currentMove === player.symbol} />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isTimerRunning }) {
  const [seconds, setSeconds] = useState(30);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');

  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const timer = setInterval(() => {
        setSeconds(previousStage => Math.max(previousStage - 1, 0));
      }, 1000);
      return () => {
        clearInterval(timer);
        setSeconds(30);
      };
    }
  }, [isTimerRunning]);

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? 'text-orange-600' : 'text-slate-900';
    }
    return 'text-slate-300';
  };

  return (
    <div className={clsx('flex items-center gap-3', 'even:flex-row-reverse even:text-right')}>
      <div className="relative">
        <Profile className="w-44" name={playerInfo.name} rating={playerInfo.rating} avatar={playerInfo.avatar} />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center flex">
          <GameSymbol1 symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className="w-px h-8 bg-slate-300"></div>
      <div className={clsx('text-lg font-[Inter] leading-[1.2] font-semibold', getTimerColor())}>
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
