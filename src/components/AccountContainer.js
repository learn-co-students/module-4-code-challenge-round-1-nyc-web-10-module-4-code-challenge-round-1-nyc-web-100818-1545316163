import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import { transactions } from '../transactionsData';

const URL = 'https://boiling-brook-94902.herokuapp.com/transactions';

class AccountContainer extends Component {
  state = {
    transactions: [],
    query: 'Search Term'
  };

  // Initial set state, we get data back from our API and use setState to update our state to the parsed response
  componentDidMount() {
    fetch(URL)
      .then(r => r.json())
      .then(data => {
        // console.log(data);
        this.setState({ transactions: data });
      });
  }

  handleChange = event => {
    const userInput = event.target.value;
    console.log(userInput);
    this.setState({ query: userInput });
  };

  render() {
    return (
      <div>
        <Search search={this.state} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

// onChange = { handleChange } value = { this.state.query }
export default AccountContainer;
