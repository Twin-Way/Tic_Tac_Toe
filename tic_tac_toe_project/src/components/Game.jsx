import useGameState from "../hooks/useGameState.js";
import GameInfo from "./GameInfo.jsx";
import GameCell from "./GameCell.jsx";
import { ResetButton } from "./resetButton.jsx";

export default function Game() {
  const { cells, currentStep, handleReset, handleCellClick, winnerSequence } =
    useGameState();

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-3">
      <GameInfo
        currentStep={currentStep}
        winnerSequence={winnerSequence}
        cells={cells}
      />
      <div className="grid pt-px pl-px grid-cols-[repeat(3,30px)] grid-rows-[repeat(3,30px)] mb-1">
        {cells.map((symbol, index) => {
          const isWinner = winnerSequence?.includes(index);
          return (
            <GameCell
              isWinner={isWinner}
              onClick={() => handleCellClick(index)}
              symbol={symbol}
              key={index}
            />
          );
        })}
      </div>
      <ResetButton handleReset={handleReset} />
    </div>
  );
}
