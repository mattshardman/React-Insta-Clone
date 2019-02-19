import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import PostContainer from './components/postsSection/PostContainer';

import data from './dummy-data';

const PostsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  background: #fafafa;
`;

class App extends Component {
  state = {
    posts: null,
  }

  componentWillMount() {
    this.setState({ posts: data });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
       <SearchBar />
       { posts &&
        <PostsWrapper>
          { posts.map(post => <PostContainer key={post.timestamp} {...post}/>) }
        </PostsWrapper>
       }
      </div>
    );
  }
}

export default App;
