import { SYMBOL_X, SYMBOL_0 } from "./constants.js";
import clsx from "clsx";

export default function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_0) return "text-red-500";
    if (symbol === SYMBOL_X) return "text-green-700";
  };

  return (
    <span
      className={clsx(
        "text-20 leading-8 text-green-700",
        getSymbolClassName(symbol),
      )}
    >
      {symbol}
    </span>
  );
}
