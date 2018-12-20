import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: "",
    sort: {
      sortBy: "posted_at",
      direction: "desc"
    }
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

  onSortClick = (sortBy, direction) => { 
    this.setState(state => { 
      if (state.sort.sortBy === sortBy) {
        direction = (state.sort.direction === "desc") ? "asc" : "desc"
      }
      return { sort: { sortBy, direction } }
     }) 
  }

  get filteredResult() {
    return this.state.searchTerm === "" 
      ? this.state.transactions
      : this.state.transactions.filter(t => {
          const lSearch = this.state.searchTerm.toLowerCase() // change value on input?
          return t.description.toLowerCase().includes(lSearch) || t.category.toLowerCase().includes(lSearch)
        })
  }

  get sortedResults() {
    const sortedResults = [...this.filteredResult]
    const { sortBy, direction } = this.state.sort
    const directionModifier = direction === "desc" ? -1 : 1
    sortedResults.sort((a, b) => {
      if (typeof a[sortBy] === 'string') {
        return a[sortBy].localeCompare(b[sortBy]) * directionModifier
      } else {
        return (a[sortBy] < b[sortBy] ? -1 : (a[sortBy] > b[sortBy] ? 1 : 0)) * directionModifier
      }
    })
    return sortedResults
  }

  render() {
    const { state: { sort, searchTerm }, onSortClick, onSearchChange, sortedResults } = this
    return (
      <div>
        <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
        <TransactionsList sort={sort} transactions={sortedResults} onSortClick={onSortClick} />
      </div>
    )
  }
}

export default AccountContainer
