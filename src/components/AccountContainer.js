import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const API = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  state = { transactionData: [], userInput: '' }

  componentDidMount() {
    fetch(API)
    .then( rsp => rsp.json() )
    .then( data => {
      this.setState( { transactionData: data } )
    } )
  }

  handleChange = (input) => {
    this.setState( { userInput: (input).toLowerCase() } )
  }

  handleFilter = () =>{
     return this.state.transactionData.filter( data =>  (data.description).toLowerCase().includes(this.state.userInput) || (data.category).toLowerCase().includes(this.state.userInput)  )
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList filterList={this.handleFilter()}  />
      </div>
    )
  }
}

export default AccountContainer

// constructor() {
//   super()
//   this.state = {
//
//   }
