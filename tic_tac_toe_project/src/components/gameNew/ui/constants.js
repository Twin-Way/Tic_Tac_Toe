import avatarSrc1 from '../../game/images/avatar1.png';
import avatarSrc2 from '../../game/images/avatar2.png';
import avatarSrc3 from '../../game/images/avatar3.png';
import avatarSrc4 from '../../game/images/avatar4.png';

export const GAME_SYMBOLS = {
  ZERO: 'zero',
  CROSS: 'cross',
  TRIANGLE: 'triangle',
  SQUARE: 'square',
};

export const MOVE_ORDER = [GAME_SYMBOLS.CROSS, GAME_SYMBOLS.ZERO, GAME_SYMBOLS.TRIANGLE, GAME_SYMBOLS.SQUARE];

export const PLAYERS = [
  { id: 1, name: 'User3021', rating: 1203, symbol: GAME_SYMBOLS.CROSS, avatar: avatarSrc1 },
  { id: 2, name: 'User1309', rating: 850, symbol: GAME_SYMBOLS.ZERO, avatar: avatarSrc2 },
  { id: 3, name: 'User5023', rating: 1400, symbol: GAME_SYMBOLS.TRIANGLE, avatar: avatarSrc3 },
  { id: 4, name: 'User809', rating: 760, symbol: GAME_SYMBOLS.SQUARE, avatar: avatarSrc4 },
];
