import React, { useState } from "react"
import questions from "./data"

const App = () => {
  const [openIds, setOpenIds] = useState([])
  const [multiple, setMultiple] = useState(false)

  const toggleShow = (id) => {
    if (multiple) {
      setOpenIds(
        (prevIds) =>
          prevIds.includes(id)
            ? prevIds.filter((openId) => openId !== id) 
            : [...prevIds, id] 
      )
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  const handleMultiple = () => {
    if (multiple) {
      setOpenIds([])
    }
    setMultiple((prev) => !prev)
  }

  return (
    <div className="wrapper">
      <div>
        <label htmlFor="">Multiple Allowed</label>
        <input type="checkbox" name="" id="" onChange={handleMultiple} />
      </div>
      {questions.map((question) => (
        <div className="question" key={question.id}>
          <div className="head">
            <h2>{question.title}</h2>
            <button onClick={() => toggleShow(question.id)}>
              {openIds.includes(question.id) ? "-" : "+"}
            </button>
          </div>
          {openIds.includes(question.id) && (
            <div className="content">{question.info}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default App
