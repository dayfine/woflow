// For Board DnD Exmaple
const MOVE_KNIGHT = 'MOVE_KNIGHT'

export const moveKnight = (toX, toY) => ({ type: MOVE_KNIGHT, newPosition: [toX, toY] })

export function canMoveKnight (newPosition, knightPosition) {
  const [x, y] = knightPosition
  const [toX, toY] = newPosition
  const dx = toX - x
  const dy = toY - y

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2)
}

export default (knightPosition = [1, 7], action) => {
  switch (action.type) {
    case MOVE_KNIGHT:
      return canMoveKnight(action.newPosition, knightPosition)
        ? action.newPosition
        : knightPosition
    default:
      return knightPosition
  }
}
