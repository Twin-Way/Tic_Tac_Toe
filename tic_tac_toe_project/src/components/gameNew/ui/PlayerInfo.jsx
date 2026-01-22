import clsx from 'clsx';
import GameSymbol1 from './GameSymbol1.jsx';

export default function PlayerInfo({ name, rating, symbol, isTimerRunning, seconds, avatar }) {
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');
  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? 'text-orange-600' : 'text-slate-900';
    }
    return 'text-slate-300';
  };

  return (
    <div className={'flex items-center gap-3 even:flex-row-reverse even:text-right'}>
      <div className={'relative'}>
        <div className={'ml-auto flex items-center gap-2 text-start text-teal-600'}>
          <img src={avatar} alt="avatar" className="w-12 h-12" />
          <div className="overflow-hidden">
            <div className="text-lg font-[Inter] leading-[1.2] truncate">{name}</div>
            <div className="text-slate-400 text-xs font-[Inter] leading-[1.2]">Рейтинг: {rating}</div>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center flex">
          <GameSymbol1 symbol={symbol} />
        </div>
      </div>
      <div className={'w-px h-8 bg-slate-300'}></div>
      <div className={clsx('text-lg font-[Inter] leading-[1.2] font-semibold', getTimerColor())}>
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
