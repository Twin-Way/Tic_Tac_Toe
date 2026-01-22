import { LeftArrowIcon } from './icons/LeftArrowIcon.jsx';
import StarIcon from './icons/StarIcon.jsx';
import PlayerIcon from './icons/PlayerIcon.jsx';
import TimeIcon from './icons/TimeIcon.jsx';

export default function GameTitle({ playersCount }) {
  return (
    <div className="pl-2">
      <a href="#" className="flex items-center gap-2 text-xs text-teal-600 font-[Inter] leading-[1.2] -mb-0.5">
        <LeftArrowIcon />
        На главную
      </a>

      <h1 className="text-4xl font-[Inter] leading-[1.2]">Крестики-нолики</h1>

      <div className="flex gap-3 items-center text-xs text-slate-400">
        <StarIcon />
        <div className="flex gap-1 items-center">
          <PlayerIcon /> {playersCount}
        </div>
        <div className="flex gap-1 items-center">
          <TimeIcon /> 1 минута на ход
        </div>
      </div>
    </div>
  );
}
