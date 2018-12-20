import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const dataAPI = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  state = {
    data: [],
    searchInput: ''
  }

  componentDidMount() {
    fetch(dataAPI).then(r => r.json()).then(s => this.setState({ data: s }))
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  filterTransactions = () => {
    const filteredTransactions = this.state.data.filter(d => {
      return d.category.toLowerCase().includes(this.state.searchInput.toLowerCase()) || d.description.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })
    return <TransactionsList data={filteredTransactions} />
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} searchInput={this.state.searchInput} />
        {this.filterTransactions()}
      </div>
    )
  }
}

export default AccountContainer
