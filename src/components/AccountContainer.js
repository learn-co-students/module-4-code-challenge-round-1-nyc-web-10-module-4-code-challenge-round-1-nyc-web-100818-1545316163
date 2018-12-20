import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

    state = { transactions: [], term: "" }

    componentDidMount(){
      fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(json => {
        console.log(json);
      this.setState({ transactions: json }, () => console.log(this.state))
      })
    }


  filteredTransactions = () => {
    const filteredTransactions = this.state.transactions.filter(trn => {
      return trn.description.toLowerCase().includes(this.state.term.toLowerCase()) && trn.category.toLowerCase().includes(this.state.term.toLowerCase())
    })
    return filteredTransactions
  }

  handleChange = (event) => {
    console.log(event.target.value);
    const term = event.target.value
    this.setState({ term }, () => console.log(this.state.term))
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} transactions={this.filteredTransactions()} term={this.state.term}/>
        <TransactionsList transactions={this.filteredTransactions()}/>
      </div>
    )
  }
}

export default AccountContainer
