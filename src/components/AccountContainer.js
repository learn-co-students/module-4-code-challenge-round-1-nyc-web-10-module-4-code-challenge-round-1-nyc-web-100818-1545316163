import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'


const API = "https://boiling-brook-94902.herokuapp.com/transactions"


class AccountContainer extends Component {
  state = {
    data: [],
    term: ""
  }

  componentDidMount(){
    fetch(API)
      .then(r => r.json())
      .then(dataAPI => {
        this.setState({data: dataAPI})
      })
  }

  handleChange = (event) => {
    this.setState({term: event.target.value})
  }

  filteredData = () => {
    const newData = this.state.data.filter(data => {
      return data.category.toLowerCase().includes(this.state.term.toLowerCase())
      || data.description.toLowerCase().includes(this.state.term.toLowerCase())
    })
    return newData
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList data={this.filteredData()}/>
      </div>
    )
  }
}

export default AccountContainer
