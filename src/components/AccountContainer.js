import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'
const ApiUrl = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchValue: '',
      transactions: []
    }
  }

  fetchApi = () => {
    fetch(ApiUrl)
      .then(res => res.json())
      .then(transactions => {
        this.setState({
          transactions
        })
      })
  }

  componentDidMount() {
    this.fetchApi()
  }

  handleChange = (searchValue) => {
    this.setState({
      searchValue
    })
  }

  renderTransactions = () => {
    return this.state.transactions.filter(t => t.description.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transaction={this.renderTransactions()}/>
      </div>
    )
  }
}

export default AccountContainer
