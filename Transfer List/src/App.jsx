import React, { useState } from "react"

const App = () => {
  const [leftItems, setLeftItems] = useState([
    { id: 1, title: "React.js" },
    { id: 2, title: "Node.js" },
    { id: 3, title: "Next.js" },
    { id: 4, title: "JavaScript" },
  ])

  const [rightItems, setRightItems] = useState([
    { id: 5, title: "MySQL" },
    { id: 6, title: "MongoDB" },
    { id: 7, title: "Python" },
    { id: 8, title: "Django" },
  ])

  const [selectedItems, setSelectedItems] = useState([])

  const handleToggle = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    )
  }

  const allToRight = () => {
    setRightItems((prev) => [...prev, ...leftItems])
    setLeftItems([])
    setSelectedItems([])
  }

  const allToLeft = () => {
    setLeftItems((prev) => [...prev, ...rightItems])
    setRightItems([])
    setSelectedItems([])
  }

  const toRight = () => {
    const itemsToMove = leftItems.filter((item) =>
      selectedItems.includes(item.id)
    )
    setRightItems((prev) => [...prev, ...itemsToMove])
    setLeftItems((prev) =>
      prev.filter((item) => !selectedItems.includes(item.id))
    )
    setSelectedItems([])
  }

  const toLeft = () => {
    const itemsToMove = rightItems.filter((item) =>
      selectedItems.includes(item.id)
    )
    setLeftItems((prev) => [...prev, ...itemsToMove])
    setRightItems((prev) =>
      prev.filter((item) => !selectedItems.includes(item.id))
    )
    setSelectedItems([])
  }

  const moveItem = (e) => {
    const btn = e.target.id
    switch (btn) {
      case "allToRight":
        allToRight()
        break
      case "allToLeft":
        allToLeft()
        break
      case "toRight":
        toRight()
        break
      case "toLeft":
        toLeft()
        break
      default:
        console.log(btn)
    }
  }

  return (
    <div className="container">
      <div className="left-items">
        <h2>Left Items</h2>
        <ul className="list-items">
          {leftItems.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                checked={selectedItems.includes(item.id)}
                onChange={() => handleToggle(item.id)}
              />
              <label htmlFor={item.id}>{item.title}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="operators">
        <ul onClick={moveItem}>
          <li>
            <button id="allToRight">{"=>"}</button>
          </li>
          <li>
            <button id="toRight">{">"}</button>
          </li>
          <li>
            <button id="toLeft">{"<"}</button>
          </li>
          <li>
            <button id="allToLeft">{"<="}</button>
          </li>
        </ul>
      </div>
      <div className="right-items">
        <h2>Right Items</h2>
        <ul className="list-items">
          {rightItems.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                checked={selectedItems.includes(item.id)}
                onChange={() => handleToggle(item.id)}
              />
              <label htmlFor={item.id}>{item.title}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
