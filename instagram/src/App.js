import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SearchBar />
       <div style={{
         width: '100%',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
       }}>
        <PostContainer />
       </div>
      </div>
    );
  }
}

export default App;
