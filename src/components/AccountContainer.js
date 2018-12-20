import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  //
  // constructor() {
  //   super()
  //
  //   // get a default state working with the data imported from TransactionsData
  //   // use this to get the functionality working
  //   // then replace the default transactions with a call to the API
  //
  // }

  state={
    transactions: [],
    term: ''
  }

  componentDidMount(){
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
      .then(response => response.json())
      .then(transactionData =>
        this.setState({
          transactions: transactionData
        }, ()=> console.log(this.state.transactions)))
  }

  handleSearchChange = event => {
    // debugger
    this.setState({
      term: event.target.value
    })
  }



  render() {

    const filteredTransactions = this.state.transactions.filter(t=>{
      return t.category.toLowerCase().includes(this.state.term.toLowerCase()) || t.description.toLowerCase().includes(this.state.term.toLowerCase())

    })

    return (
      <div>
        <Search handleChange={this.handleSearchChange} term={this.state.term}/>
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
