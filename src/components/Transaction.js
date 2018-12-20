import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.posted_at}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
  )
}

export default Transaction


// { id: 1, posted_at: "2017-02-28 11:00:00", description: "Leather Pants, Gap co.", category: "Fashion", amount: -20000 }