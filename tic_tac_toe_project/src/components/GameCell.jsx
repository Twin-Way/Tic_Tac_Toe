import GameSymbol from "./GameSymbol.jsx";
import clsx from "clsx";

export default function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "border border-gray-400 -ml-px -mt-px flex items-center justify-center",
        isWinner ? "bg-red-300" : "bg-transparent",
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
