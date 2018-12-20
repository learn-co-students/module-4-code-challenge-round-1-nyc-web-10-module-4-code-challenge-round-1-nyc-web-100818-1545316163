import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

const API = 'https://boiling-brook-94902.herokuapp.com/transactions';
class AccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state={
      transactions: [],
      searchTerm: ''
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(transData => {
      this.setState({transactions: transData})
    })
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    let input = event.target.value
    this.setState({searchTerm: input})
  }

  render() {
    let filteredTrans = this.state.transactions.filter(trans =>
      trans.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
      trans.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        <TransactionsList transactions={filteredTrans}/>
      </div>
    )
  }
}

export default AccountContainer
