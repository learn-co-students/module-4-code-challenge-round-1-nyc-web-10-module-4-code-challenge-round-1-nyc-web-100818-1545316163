import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'
const API = "https://boiling-brook-94902.herokuapp.com/transactions";

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      search: ""
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {
    fetch(API).then(resp => resp.json())
      .then( transactions =>  this.setState({transactions}))
  }

  handleChange = (event) =>  {
    // console.log(this.state)
    this.setState({
      search: event.target.value
    })
  }

  filteredTransactions = () => {
    let newArray = []
    newArray = this.state.transactions.filter(transaction => {
      return (transaction.description
          .toLowerCase()
          .includes(
            this.state.search.toLowerCase()
          ) || transaction.description
          .toLowerCase()
          .includes(this.state.search.toLowerCase()));
    })
    return newArray
  }
  

  render() {

    return (
      <div>
        <Search search={this.handleChange}/>
        {/* <TransactionsList transactions={this.state.transactions}/> */}
        <TransactionsList transactions={this.filteredTransactions()}/>
      </div>
    )
  }
}

export default AccountContainer
