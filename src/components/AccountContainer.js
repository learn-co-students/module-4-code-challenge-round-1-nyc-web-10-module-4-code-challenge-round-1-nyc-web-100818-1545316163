import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const API = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      transactions: [],
      searchTerm: ''
    }

  }

  componentDidMount() {
    fetch(API).then(resp=>resp.json()).then(tData=> {
      this.setState({
        transactions: tData
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  searchFilter = () => {
    return this.state.transactions.filter(t => {
      return t.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || t.category.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  render() {

    return (
      <div>
        <Search
        searchTerm={this.state.searchTerm}
        handleChange={this.handleChange}/>
        <TransactionsList transactions={this.searchFilter()}/>
      </div>
    )
  }
}

export default AccountContainer
