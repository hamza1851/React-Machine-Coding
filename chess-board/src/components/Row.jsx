const Row = ({ size, row, redCells, onClick }) => {
  return (
    <>
      {size.map((_, idx) => (
        <div
          key={idx}
          data-row={row}
          data-col={idx}
          onClick={onClick}
          className={`cell ${(row + idx) % 2 ? "black" : "white"} ${
            redCells.includes(`${row}-${idx}`) ? "red" : ""
          }`}
        ></div>
      ))}
    </>
  )
}

export default Row
