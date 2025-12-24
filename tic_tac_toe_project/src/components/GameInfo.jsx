import GameSymbol from './GameSymbol.jsx';

export default function GameInfo({ winnerSequence, currentStep, cells }) {
  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter(value => value).length === 9;

  return (
    <div className="mb-2">
      {isDraw ? 'Ничья' : winnerSequence ? 'Победитель: ' : 'Ход: '}
      {!isDraw && <GameSymbol symbol={winnerSymbol ?? currentStep} />}
    </div>
  );
}
