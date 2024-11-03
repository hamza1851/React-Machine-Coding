import React from "react"

const Table = ({ data }) => {
  return (
    <tr className="table-row" key={data.id}>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.price}</td>
    </tr>
  )
}

export default Table
