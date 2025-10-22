import React from 'react'

export type Player = 'X' | 'O' | null

export interface SquareProps {
  index: number
  value: Player
  onClick: () => void
  highlight?: boolean
  disabled?: boolean
}

// PUBLIC_INTERFACE
export default function Square({
  index,
  value,
  onClick,
  highlight = false,
  disabled = false,
}: SquareProps): JSX.Element {
  /**
   * A single square button. It's accessible by keyboard and announces state.
   */
  const pressed = value !== null
  const label =
    value === null ? `Square ${index + 1}, empty` : `Square ${index + 1}, ${value}`

  return (
    <button
      type="button"
      className={`square ${highlight ? 'square--highlight' : ''} ${pressed ? 'square--filled' : ''}`}
      onClick={onClick}
      aria-label={label}
      aria-pressed={pressed}
      disabled={disabled}
      role="gridcell"
      tabIndex={0}
    >
      {value}
    </button>
  )
}
