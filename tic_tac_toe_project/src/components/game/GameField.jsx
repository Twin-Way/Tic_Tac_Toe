import clsx from 'clsx';
import UiButton from '../uikit/UiButton.jsx';
import GameSymbol1 from './GameSymbol1.jsx';

export default function GameField({ className, cells, currentMove, nextMove, handleCellClick }) {
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        currentMove={currentMove}
        nextMove={nextMove}
        actions={
          <>
            <UiButton variant="primary" size="md">
              Ничья
            </UiButton>
            <UiButton variant="outline" size="md">
              Сдаться
            </UiButton>
          </>
        }
      />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            onClick={() => {
              handleCellClick(index);
            }}
          >
            {symbol && <GameSymbol1 symbol={symbol} className="w-5 h-5" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ children, onClick }) {
  return (
    <button onClick={onClick} className="border border-slate-200 -ml-px -mt-px flex items-center justify-center">
      {children}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
  return <div className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7')}>{children}</div>;
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-slate-900 text-xl font-[Inter] leading-[1.2] font-semibold">
          Ход: <GameSymbol1 symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 font-[Inter] leading-[1.2] text-slate-400 text-xs">
          Следующий: <GameSymbol1 symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">{children}</div>
  );
}
