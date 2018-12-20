import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'
const API = 'https://boiling-brook-94902.herokuapp.com/transactions'
class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({
        transactions: data
      },() => console.log(this.state)))
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }


  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
      <TransactionsList transactions={this.state.transactions} searchParams={this.state.search}/>
      </div>
    )
  }
}

export default AccountContainer
