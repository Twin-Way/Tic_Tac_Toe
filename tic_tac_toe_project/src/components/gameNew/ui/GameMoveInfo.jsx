import GameSymbol1 from './GameSymbol1.jsx';

export default function GameMoveInfo({ currentMove, nextMove }) {
  return (
    <>
      <div className="flex items-center gap-1 text-slate-900 text-xl font-[Inter] leading-[1.2] font-semibold">
        Ход: <GameSymbol1 symbol={currentMove} className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-1 font-[Inter] leading-[1.2] text-slate-400 text-xs">
        Следующий: <GameSymbol1 symbol={nextMove} className="w-3 h-3" />
      </div>
    </>
  );
}
