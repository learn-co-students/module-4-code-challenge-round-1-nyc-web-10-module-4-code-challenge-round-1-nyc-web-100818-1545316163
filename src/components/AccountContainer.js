import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
//import {transactions} from '../transactionsData'

const API = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

  state = {
    transactions: [],
    term: ""
  }

  componentDidMount() {
      fetch(API)
      .then(r => r.json())
      .then(transactionsArray => {
        //console.log(transactionsArray)
        this.setState({transactions: transactionsArray})
      })
  }

  handleChange = (event) => {
    //console.log(event.target.value)
    this.setState({ term: event.target.value })
  }

  filteredTransactions = () => {
    //debugger
    const filteredList = this.state.transactions.filter(transaction =>{
      return transaction.description.toLowerCase().includes(this.state.term) || transaction.category.toLowerCase().includes(this.state.term)
    })
    return filteredList
  }

  render() {
    //console.log(this.state.transactions)
    //console.log(this.state.term)
    return (
      <div>
        <Search handleChange={this.handleChange} term={this.state.term} />
        <TransactionsList transactions={this.filteredTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
