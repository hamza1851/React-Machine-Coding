import { useState } from "react"
import "./App.css"
import { FOODS } from "./data"
import Table from "./Table"

function App() {
  const [currentPage, setCurrecntPage] = useState(1)
  const [limit, setLimit] = useState(10)

  const handleNext = () => {
    const lastPage = Math.ceil(FOODS.length / limit)
    if (currentPage < lastPage) {
      setCurrecntPage((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage !== 1) {
      setCurrecntPage((prev) => prev - 1)
    }
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr className="table-cols">
            <th>#</th>
            <th>Food</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="body-full">
          {FOODS.slice(currentPage * limit - limit, currentPage * limit).map(
            (food, idx) => (
              <Table key={idx} data={food} />
            )
          )}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default App
