import React, { useMemo, useState } from 'react'
import Board from './components/Board'
import type { Player } from './components/Square'
import { calculateWinner } from './lib/calculateWinner'

/**
 * Derived helpers
 */
function isNonNull<T>(v: T | null): v is T {
  return v !== null
}

// PUBLIC_INTERFACE
export default function App(): JSX.Element {
  /**
   * The main application component that renders:
   * - Game status header with current player or result
   * - 3x3 Board component
   * - Controls including Reset button
   * Game rules:
   * - Two players (X and O) alternating turns
   * - Win and draw detection
   * - Prevent moves after game over
   * - Reset clears board and sets X to start
   * Returns the full UI for the game.
   */
  const [squares, setSquares] = useState<Player[]>(Array<Player>(9).fill(null))
  const [xIsNext, setXIsNext] = useState<boolean>(true)

  const { winner, line } = useMemo(() => calculateWinner(squares), [squares])
  const isBoardFull = useMemo(() => squares.every(isNonNull), [squares])
  const gameOver = Boolean(winner) || isBoardFull

  const status = winner
    ? `Winner: ${winner}`
    : isBoardFull
      ? 'Draw game'
      : `Next player: ${xIsNext ? 'X' : 'O'}`

  function handleSquareClick(i: number) {
    if (squares[i] !== null || gameOver) return
    const next = squares.slice()
    next[i] = xIsNext ? 'X' as const : 'O' as const
    setSquares(next)
    setXIsNext(!xIsNext)
  }

  function handleReset() {
    setSquares(Array<Player>(9).fill(null))
    setXIsNext(true)
  }

  return (
    <div className="app">
      <div className="card" role="application" aria-label="Tic Tac Toe game">
        <header className="header">
          <h1 className="title">Tic Tac Toe</h1>
          <p
            className={`status ${winner ? 'status--win' : isBoardFull ? 'status--draw' : 'status--turn'}`}
            aria-live="polite"
          >
            {status}
          </p>
        </header>

        <Board
          squares={squares}
          onSquareClick={handleSquareClick}
          highlightLine={line}
          disabled={gameOver}
        />

        <div className="controls">
          <button className="btn" onClick={handleReset} aria-label="Reset game">
            Reset
          </button>
          {!gameOver && (
            <span className="hint">Click a square to place {xIsNext ? 'X' : 'O'}.</span>
          )}
        </div>
      </div>

      <footer className="footer">
        <span className="badge">Ocean Professional</span>
      </footer>
    </div>
  )
}
