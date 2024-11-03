import { useState, useEffect } from "react"
import "./App.css"

const initialBoard = Array(9).fill(null)

function App() {
  const winningPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ]

  const [wins, setWins] = useState({ X: 0, O: 0, draw: 0 })
  const [board, setBoard] = useState(initialBoard)
  const [isXTurn, setIsXTurn] = useState(true)
  const [status, setStatus] = useState("Status: Ongoing")

  const handleClick = (idx) => {
    // Ignore if there is a winner or cell is already filled
    if (checkWinner() || board[idx]) {
      return
    }

    const newBoard = [...board]
    newBoard[idx] = isXTurn ? "X" : "O"
    setBoard(newBoard)
    setIsXTurn((prev) => !prev)
  }

  const checkWinner = () => {
    for (let i = 0; i < winningPos.length; i++) {
      const [a, b, c] = winningPos[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a] 
      }
    }
    return null
  }

  useEffect(() => {
    const winner = checkWinner()
    if (winner) {
      setStatus(`Winner: ${winner}`)
      setWins((prevWins) => ({
        ...prevWins,
        [winner]: prevWins[winner] + 1,
      }))
    } else if (!board.includes(null)) {
      setStatus("Draw")
      setWins((prevWins) => ({
        ...prevWins,
        draw: prevWins.draw + 1,
      }))
    } else {
      setStatus("Status: Ongoing")
    }
  }, [board])

  return (
    <div className="main">
      <h2 className="winner-status">{status}</h2>
      <div className="winning-stats">
        <h2>X : {wins.X}</h2>
        <h2>O : {wins.O}</h2>
        <h2>Draw : {wins.draw}</h2>
      </div>
      <div className="board">
        {board.map((sqr, idx) => (
          <div className="sqr" key={idx} onClick={() => handleClick(idx)}>
            {sqr}
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setBoard(initialBoard.fill(null))}>Reset</button>
      </div>
    </div>
  )
}

export default App
