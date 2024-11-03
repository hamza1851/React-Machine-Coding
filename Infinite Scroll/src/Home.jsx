import React, { useState, useEffect } from "react"

const Home = () => {
  const [card, setCard] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const getCardData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    )
    const data = await res.json()
    setCard((prev) => [...prev, ...data])
    setLoading(false)
  }

  useEffect(() => {
    getCardData()
  }, [page])

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true)
        setPage((prev) => prev + 1)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll)
    return () => window.removeEventListener("scroll", handleInfiniteScroll)
  }, [])

  return (
    <div className="app">
      <h1 className="title">Infinite Scroll - Posts</h1>
      <div className="cards-container">
        {card.map((curVal) => (
          <div key={curVal.id} className="card">
            <div className="card-content">
              <p className="card-body ">{curVal.body.substr(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
    </div>
  )
}

export default Home
