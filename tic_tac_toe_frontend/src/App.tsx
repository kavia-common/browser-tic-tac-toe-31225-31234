import React, { useMemo, useState } from 'react'

type Player = 'X' | 'O' | null

// Calculate winner given board state
function calculateWinner(squares: Player[]): { winner: Player; line: number[] | null } {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // cols
    [0, 4, 8],
    [2, 4, 6]  // diagonals
  ]
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] }
    }
  }
  return { winner: null, line: null }
}

interface SquareProps {
  value: Player
  onClick: () => void
  highlight?: boolean
}

function Square({ value, onClick, highlight }: SquareProps) {
  return (
    <button
      className={`square ${highlight ? 'square--highlight' : ''} ${value ? 'square--filled' : ''}`}
      onClick={onClick}
      aria-label={`Square ${value ?? 'empty'}`}
    >
      {value}
    </button>
  )
}

interface BoardProps {
  squares: Player[]
  onSquareClick: (i: number) => void
  highlightLine: number[] | null
}

function Board({ squares, onSquareClick, highlightLine }: BoardProps) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe Board">
      {squares.map((sq, i) => {
        const highlight = !!highlightLine?.includes(i)
        return (
          <Square
            key={i}
            value={sq}
            onClick={() => onSquareClick(i)}
            highlight={highlight}
          />
        )
      })}
    </div>
  )
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
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState<boolean>(true)

  const { winner, line } = useMemo(() => calculateWinner(squares), [squares])
  const isBoardFull = useMemo(() => squares.every(Boolean), [squares])
  const gameOver = !!winner || isBoardFull

  const status = winner
    ? `Winner: ${winner}`
    : isBoardFull
      ? 'Draw game'
      : `Next player: ${xIsNext ? 'X' : 'O'}`

  function handleSquareClick(i: number) {
    if (squares[i] || gameOver) return
    const next = squares.slice()
    next[i] = xIsNext ? 'X' : 'O'
    setSquares(next)
    setXIsNext(!xIsNext)
  }

  function handleReset() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <div className="app">
      <div className="card">
        <header className="header">
          <h1 className="title">Tic Tac Toe</h1>
          <p
            className={`status ${winner ? 'status--win' : isBoardFull ? 'status--draw' : 'status--turn'}`}
            aria-live="polite"
          >
            {status}
          </p>
        </header>

        <Board squares={squares} onSquareClick={handleSquareClick} highlightLine={line} />

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
