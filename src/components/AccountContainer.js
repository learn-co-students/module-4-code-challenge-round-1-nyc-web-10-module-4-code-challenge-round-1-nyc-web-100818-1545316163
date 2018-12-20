import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(r => {
        if (r.ok) {
          return r.json()
        } else {
          throw r
        }
      })
      .then(transactions => {
        this.setState({ transactions })
      })
      .catch(console.error)
  }

  onSearchChange = searchTerm => { this.setState({ searchTerm }) }

  get filteredResult() {
    return this.state.searchTerm === "" 
      ? this.state.transactions
      : this.state.transactions.filter(t => {
          const lSearch = this.state.searchTerm.toLowerCase() // change value on input?
          return t.description.toLowerCase().includes(lSearch) || t.category.toLowerCase().includes(lSearch)
        })
  }

  render() {
    const { state: { searchTerm }, onSearchChange, filteredResult } = this
    return (
      <div>
        <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
        <TransactionsList transactions={filteredResult} />
      </div>
    )
  }
}

export default AccountContainer
