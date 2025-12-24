import { useState } from "react";
import computeWinner from "../utils/computeWinner.js";
import { SYMBOL_X, SYMBOL_0 } from "../components/constants.js";

export default function useGameState() {
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState();

  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence) return;

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_0 : SYMBOL_X);
    setWinnerSequence(winner);
  };

  const handleReset = () => {
    setCells(Array.from({ length: 9 }, () => null));
    setWinnerSequence(null);
    setCurrentStep(SYMBOL_X);
  };

  return {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleReset,
  };
}
