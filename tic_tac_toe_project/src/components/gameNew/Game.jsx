import GameLayout from './ui/GameLayout.jsx';
import BackLink from './ui/BackLink.jsx';
import GameInfo from './ui/GameInfo.jsx';
import GameTitle from './ui/GameTitle.jsx';
import { PLAYERS } from './ui/constants.js';
import PlayerInfo from './ui/PlayerInfo.jsx';
import GameMoveInfo from './ui/GameMoveInfo.jsx';
import useGameState from './model/useGameState.js';
import GameCells from './ui/GameCells.jsx';
import GameOverModal from './ui/GameOverModal.jsx';

const PLAYERS_COUNT = 2;

export default function Game() {
  const { cells, currentMove, nextMove, handleCellClick, winnerSequence, winnerSymbol } = useGameState(PLAYERS_COUNT);
  const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        backlink={<BackLink />}
        title={<GameTitle />}
        info={<GameInfo isRatingGame timeMode={'1 минута на ход'} playersCount={4} />}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            name={player.name}
            isRight={index % 2 === 1}
            rating={player.rating}
            avatar={player.avatar}
            seconds={30}
            symbol={player.symbol}
          />
        ))}
        gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove} />}
        gameCells={cells.map((cell, index) => (
          <GameCells
            symbol={cell}
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={() => {
              handleCellClick(index);
            }}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            name={player.name}
            isRight={index % 2 === 1}
            rating={player.rating}
            avatar={player.avatar}
            seconds={30}
            symbol={player.symbol}
          />
        ))}
      />
    </>
  );
}
