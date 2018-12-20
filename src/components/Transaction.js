import React from 'react'
// TO DO: DESCONSTRUCT LATER IF U HAVE TIME
const Transaction = (props) => {
  // console.log("Transaction props:", props);
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
