import React from 'react'

const Transaction = ({ transaction }) => {
  return (
    <tr>
      <td>{transaction.posted_at}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  )
}

// {
//   id: 1,
//   posted_at: "2017-02-28 11:00:00",
//   description: "Leather Pants, Gap co.",
//   category: "Fashion",
//   amount: -20000
// }

export default Transaction
