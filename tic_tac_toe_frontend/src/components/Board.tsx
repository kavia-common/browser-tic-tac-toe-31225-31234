import React from 'react'
import Square, { type Player } from './Square'

export interface BoardProps {
  squares: Player[]
  onSquareClick: (i: number) => void
  highlightLine: number[] | null
  disabled?: boolean
}

// PUBLIC_INTERFACE
export default function Board({
  squares,
  onSquareClick,
  highlightLine,
  disabled = false,
}: BoardProps): JSX.Element {
  /**
   * Presentational 3x3 board. Renders nine Square buttons in a grid.
   * Highlights any indices provided by highlightLine.
   */
  return (
    <div
      className="board"
      role="grid"
      aria-label="Tic Tac Toe Board"
      aria-disabled={disabled || undefined}
    >
      {squares.map((sq, i) => {
        const highlight = Boolean(highlightLine?.includes(i))
        return (
          <Square
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            index={i}
            value={sq}
            onClick={() => onSquareClick(i)}
            highlight={highlight}
            disabled={disabled || sq !== null}
          />
        )
      })}
    </div>
  )
}
