import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import ApolloClient  from  'apollo-boost';
import {ApolloProvider} from 'react-apollo'

// end point where we interact with server
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div id="main">
       <h1>Ninjas Reading List</h1>
       <BookList/>
       <AddBook/>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
