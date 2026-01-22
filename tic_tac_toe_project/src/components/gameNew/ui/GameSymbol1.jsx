import { GAME_SYMBOLS } from './constants.js';
import CrossIcon from '../../game/icons/CrossIcon.jsx';
import ZeroIcon from '../../game/icons/ZeroIcon.jsx';
import TriangleIcon from '../../game/icons/TriangleIcon.jsx';
import SquareIcon from '../../game/icons/SquareIcon.jsx';

export default function GameSymbol1({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}
