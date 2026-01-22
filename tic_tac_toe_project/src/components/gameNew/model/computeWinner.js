export function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const directions = [1, fieldSize, fieldSize + 1, fieldSize - 1];
  const isBounds = index => index >= 0 && index < cells.length;
  for (let i = 0; i < cells.length; i++) {
    const player = cells[i];
    if (!player) continue;

    for (const dir of directions) {
      let count = 1;
      const indexes = [i];

      let next = i + dir; //вперед
      while (isBounds(next) && cells[next] === player) {
        indexes.push(next);
        count++;
        next += dir;
      }

      next = i - dir; //назад
      while (isBounds(next) && cells[next] === player) {
        indexes.unshift(next);
        count++;
        next -= dir;
      }
      if (count >= sequenceSize) {
        return indexes.slice(0, sequenceSize);
      }
    }
  }
  return undefined;
}
