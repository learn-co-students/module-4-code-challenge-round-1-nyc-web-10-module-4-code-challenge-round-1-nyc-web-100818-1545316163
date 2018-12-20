import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const endPoint = 'https://boiling-brook-94902.herokuapp.com/transactions'
class AccountContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      transactions: [],
      searchTerm: ''
    }

  }

  componentDidMount() {
    fetch(endPoint)
      .then(r => r.json())
      .then(transactions => {
        this.setState({
          transactions: transactions
        })
      })
  } // i ensured that state was updated in the react console

  // HAD TO MAKE THIS AN ARROW FUNCTION OMG TOOK ME TEN MINS TO GET THAT LOL
  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    const filteredTransactions = this.state.transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm) || transaction.category.toLowerCase().includes(this.state.searchTerm) 
    })
    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
