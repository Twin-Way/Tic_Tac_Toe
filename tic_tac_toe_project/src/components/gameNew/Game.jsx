import GameLayout from './ui/GameLayout.jsx';
import BackLink from './ui/BackLink.jsx';
import GameInfo from './ui/GameInfo.jsx';
import GameTitle from './ui/GameTitle.jsx';
import { PLAYERS } from './ui/constants.js';
import PlayerInfo from './ui/PlayerInfo.jsx';
import GameMoveInfo from './ui/GameMoveInfo.jsx';
import { GameCells } from './ui/GameCells.jsx';
import GameOverModal from './ui/GameOverModal.jsx';
import { useCallback, useMemo, useReducer } from 'react';
import { computeWinner } from './model/computeWinner.js';
import { getNextMove } from './model/getNextMove.js';
import { gameStateReducer, initGameState, GAME_STATE_ACTIONS } from './model/gameStateReducer.js';
import computeWinnerSymbol from './model/computeWinnerSymbol.js';
import { computePlayerTimer } from './model/computePlayerTimer.js';
import { useInterval } from '../lib/timers.js';

const PLAYERS_COUNT = 2;

export default function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT, defaultTimer: 30000, currentMoveStart: Date.now() },
    initGameState,
  );

  useInterval(
    1000,
    !!gameState.currentMoveStart,
    useCallback(() => {
      dispatch({
        type: GAME_STATE_ACTIONS.TICK,
        now: Date.now(),
      });
    }, []),
  );

  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = gameState.loserByTime
    ? getNextMove({ ...gameState, currentMove: gameState.loserByTime })
    : computeWinnerSymbol(gameState, { winnerSequence, nextMove });
  const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol);

  const handleCellClick = useCallback(index => {
    dispatch({
      type: GAME_STATE_ACTIONS.CELL_CLICK,
      index,
      now: Date.now(),
    });
  }, []);

  const { cells, currentMove } = gameState;

  const isGameOver = Boolean(winnerSequence) || Boolean(gameState.loserByTime) || !nextMove;

  return (
    <>
      <GameLayout
        backlink={<BackLink />}
        title={<GameTitle />}
        info={<GameInfo isRatingGame timeMode={'1 минута на ход'} playersCount={4} />}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(gameState, player.symbol);
          return (
            <PlayerInfo
              key={player.id}
              name={player.name}
              isRight={index % 2 === 1}
              rating={player.rating}
              avatar={player.avatar}
              symbol={player.symbol}
              timer={timer}
              timerStartAt={timerStartAt}
            />
          );
        })}
        gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove} />}
        gameCells={cells.map((cell, index) => (
          <GameCells
            index={index}
            symbol={cell}
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={isGameOver}
            onClick={handleCellClick}
          />
        ))}
      />
      {isGameOver && (
        <GameOverModal
          winnerName={winnerPlayer?.name}
          players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
            <PlayerInfo
              key={player.id}
              name={player.name}
              isRight={index % 2 === 1}
              rating={player.rating}
              avatar={player.avatar}
              timer={gameState.timers[player.symbol]}
              symbol={player.symbol}
            />
          ))}
        />
      )}
    </>
  );
}
