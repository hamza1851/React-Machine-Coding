import React, { useState } from "react"
import Row from "./Row"

const Board = () => {
  const boardSize = Array(8).fill(null)
  const [redCells, setRedCells] = useState([])

  const leftTopDiag = (row, col) => {
    let j = col
    const cells = []
    for (let i = row; i >= 0 && j >= 0; i--, j--) {
      cells.push(`${i}-${j}`)
    }
    return cells
  }

  const rightTopDiag = (row, col) => {
    let j = col
    const cells = []
    for (let i = row; i >= 0 && j < 8; i--, j++) {
      cells.push(`${i}-${j}`)
    }
    return cells
  }

  const bottomLeftDiag = (row, col) => {
    let j = col
    const cells = []
    for (let i = row; i < 8 && j >= 0; i++, j--) {
      cells.push(`${i}-${j}`)
    }
    return cells
  }

  const bottomRightDiag = (row, col) => {
    let j = col
    const cells = []
    for (let i = row; i < 8 && j < 8; i++, j++) {
      cells.push(`${i}-${j}`)
    }
    return cells
  }

  const handleClick = (e) => {
    const row = parseInt(e.target.dataset.row, 10)
    const col = parseInt(e.target.dataset.col, 10)

    const newRedCells = [
      ...leftTopDiag(row, col),
      ...rightTopDiag(row, col),
      ...bottomLeftDiag(row, col),
      ...bottomRightDiag(row, col),
    ]

    setRedCells(newRedCells)
  }

  return (
    <div className="board">
      {boardSize.map((_, idx) => (
        <Row
          key={idx}
          size={boardSize}
          row={idx}
          redCells={redCells}
          onClick={handleClick}
        />
      ))}
    </div>
  )
}

export default Board
