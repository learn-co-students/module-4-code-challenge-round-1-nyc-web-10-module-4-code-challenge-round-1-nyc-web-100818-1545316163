import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions').then(r=>r.json())
    .then(p => {
      this.setState( { transactions: p })
    })
  }

  handleChange = (event) => {
    const searchTerm = event.target.value
    this.setState({ searchTerm })
  }

  // to test the filter conditions
  // get filteredTransactions() {
  //     const searchTerm = this.state.searchTerm
  //     return this.state.transactions.filter(spend => spend.description.toLowerCase().includes(searchTerm.toLowerCase()))
  // }
  //
  // get filterByCategory() {
  //     const searchTerm = this.state.searchTerm
  //     return this.state.transactions.filter(spend => spend.category.toLowerCase().includes(searchTerm.toLowerCase()))
  // }

  get filterAll() {
    const searchTerm = this.state.searchTerm.toLowerCase()
    return this.state.transactions.filter(spend => (spend.category.toLowerCase().includes(searchTerm) || spend.description.toLowerCase().includes(searchTerm)) ? true : false)
  }

  render() {
    const { state: { searchTerm }, handleChange } = this
    console.log(this.filterAll)
    return (
      <div>
        <Search handleChange={handleChange} searchTerm={searchTerm}/>
        <TransactionsList transactions={this.filterAll} />
      </div>
    )
  }
}

export default AccountContainer
