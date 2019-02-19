import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import PostContainer from './components/postsSection/PostContainer';
import uuid from 'uuid';

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
    searchTerm: '',
    posts: null,
  }

  componentWillMount() {
    const dataWithIds = data.map(each => ({
      ...each,
      id: uuid(),
      display: true,
    }));
    this.setState({ posts: dataWithIds });
  }

  handleLike = (id, upVote) => {
    this.setState(state => { 
      const vote = upVote ? 1 : -1;
      const newPosts = state.posts.map(post => { 
          if (post.id === id) {
            return {
              ...post,
              likes: post.likes + vote
            }
          }
          return post;
        });
      return { posts: newPosts };
    });
  }

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState(state => { 
      const newPosts = state.posts.map(post => {
        if(!post.username.includes(value)) {
          return {
            ...post,
            display: false
          }
        }

        return {
          ...post,
          display: true
        }
      });

      return { 
        searchTerm: value,
        posts: newPosts,
      }
    });
  }

  render() {
    const { posts, searchTerm } = this.state;
    return (
      <div className="App">
       <SearchBar 
        searchTerm={searchTerm}
        handleSearch={this.handleSearch}
       />
       { posts &&
        <PostsWrapper>
          { posts.map(post => 
          !!post.display &&
          <PostContainer 
            key={post.timestamp} 
            handleLike={this.handleLike}
            {...post}
          />
            ) 
          }
        </PostsWrapper>
       }
      </div>
    );
  }
}

export default App;
