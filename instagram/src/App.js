import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';

import data from './dummy-data';

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
         paddingTop: 100,
         background: '#fafafa'
       }}>
          { data.map(post => <PostContainer key={post.timestamp} {...post}/>) }
       </div>
      </div>
    );
  }
}

export default App;
