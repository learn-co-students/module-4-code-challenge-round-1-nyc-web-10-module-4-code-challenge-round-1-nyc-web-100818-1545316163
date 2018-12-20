import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import { transactions } from '../transactionsData';

class AccountContainer extends Component {
  // constructor() {
  //   super()
  //   this.state

  //   // get a default state working with the data imported from TransactionsData
  //   // use this to get the functionality working
  //   // then replace the default transactions with a call to the API

  // }

  state = {
    transactions: [{ transactions }]
  };

  handleChange = event => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Search />
        <TransactionsList />
      </div>
    );
  }
}

export default AccountContainer;
