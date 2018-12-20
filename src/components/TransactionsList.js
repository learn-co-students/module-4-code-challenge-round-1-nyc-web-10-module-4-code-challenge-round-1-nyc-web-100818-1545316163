import React from 'react'
import Transaction from './Transaction'
import SortableTableHeader from './SortableTableHeader'

const TransactionsList = ({ transactions, onSortClick, sort }) => {

  const renderTransactions = () => {
    return transactions.map(t => <Transaction key={t.id} transaction={t} />)
  }

  const onTableHeaderClick = (sortBy, direction) => {
    onSortClick(sortBy, direction)
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <SortableTableHeader onClick={onTableHeaderClick} sortBy="posted_at" direction="desc">
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </SortableTableHeader>
          <SortableTableHeader onClick={onTableHeaderClick} sortBy="description" direction="asc">
            <h3 className="ui center aligned header">
              Description
            </h3>
          </SortableTableHeader>
          <SortableTableHeader onClick={onTableHeaderClick} sortBy="category" direction="asc">
            <h3 className="ui center aligned header">
              Category
            </h3>
          </SortableTableHeader>
          <SortableTableHeader onClick={onTableHeaderClick} sortBy="amount" direction="asc">
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </SortableTableHeader>
        </tr>

        {renderTransactions()}

      </tbody>
    </table>
  )
}

export default TransactionsList
