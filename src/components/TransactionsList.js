import React from 'react'
import Transaction from './Transaction'

// FUNCTIONAL COMPONENT SO NO THIS
const TransactionsList = (props) => {
  console.log("TransactionsList props:", props.transactions);

  const mappedTransactions = props.transactions.map((t) => {
    return <Transaction key={t.id} transaction={t}/>
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {mappedTransactions}

      </tbody>
    </table>
  )
}

export default TransactionsList
