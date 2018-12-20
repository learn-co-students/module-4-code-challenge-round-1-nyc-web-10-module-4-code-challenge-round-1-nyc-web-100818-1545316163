import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

const dataURL = `https://boiling-brook-94902.herokuapp.com/transactions`

class AccountContainer extends Component {
  // get a default state working with the data imported from TransactionsData
  // use this to get the functionality working
  // then replace the default transactions with a call to the API
  constructor(props) {
    super(props)
        this.state = {
          transactions : [],
          searchBox: ""
        }
      }
  componentDidMount(){
    fetch(dataURL)
      .then(response => response.json())
      .then(transactionData => {
        this.setState({transactions: transactionData})
      })
  }
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({searchBox: event.target.value}, () => console.log(this.state))
  }
  handleDisplay = () => {

    const toRender = this.state.transactions.filter(transObj => transObj.category.toLowerCase().includes(this.state.searchBox.toLowerCase()))  
    // const toRender = this.state.transactions.filter(transObj => transObj.category.includes(this.state.searchBox))

    return toRender
  }

  render() {
    console.log('Account Container Props are -,', this.state )
    const transactionData = this.state.transactions
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactionData={this.handleDisplay()} />
      </div>
    )
  }
}

export default AccountContainer
