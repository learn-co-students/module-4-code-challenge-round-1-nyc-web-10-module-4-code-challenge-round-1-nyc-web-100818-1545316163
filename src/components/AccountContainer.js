import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const baseUrl = 'https://boiling-brook-94902.herokuapp.com/transactions';

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch(baseUrl)
    .then(res => res.json())
    .then(transactions => {
      this.setState({ transactions })
    })
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  filterTransactions = () => this.state.transactions.filter(t => t.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || t.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} change={this.handleChange}/>
        <TransactionsList transactions={this.filterTransactions()}/>
      </div>
    )
  }
}

export default AccountContainer
