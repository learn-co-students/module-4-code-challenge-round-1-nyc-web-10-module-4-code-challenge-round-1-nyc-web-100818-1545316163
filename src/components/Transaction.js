import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transactionInstance.posted_at}</td>
      <td>{props.transactionInstance.description}</td>
      <td>{props.transactionInstance.category}</td>
      <td>{props.transactionInstance.amount}</td>
    </tr>
  )
}

export default Transaction
