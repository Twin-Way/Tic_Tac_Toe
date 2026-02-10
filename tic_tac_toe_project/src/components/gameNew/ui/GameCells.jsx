import clsx from 'clsx';
import GameSymbol1 from './GameSymbol1.jsx';
import { memo } from 'react';

export const GameCells = memo(function GameCells({ symbol, disabled, onClick, isWinner, index }) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(index)}
      className={clsx(
        'border border-slate-200 -ml-px -mt-px flex items-center justify-center',
        isWinner && 'bg-orange-600/10',
      )}
    >
      {symbol && <GameSymbol1 symbol={symbol} className="w-5 h-5" />}
    </button>
  );
});
