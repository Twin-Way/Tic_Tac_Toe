import StarIcon from '../../game/icons/StarIcon.jsx';
import PlayerIcon from '../../game/icons/PlayerIcon.jsx';
import TimeIcon from '../../game/icons/TimeIcon.jsx';

export default function GameInfo({ playersCount, isRatingGame, timeMode }) {
  return (
    <div className="flex gap-3 items-center text-xs text-slate-400">
      {isRatingGame && <StarIcon />}
      <div className="flex gap-1 items-center">
        <PlayerIcon /> {playersCount}
      </div>
      <div className="flex gap-1 items-center">
        <TimeIcon /> {timeMode}
      </div>
    </div>
  );
}
