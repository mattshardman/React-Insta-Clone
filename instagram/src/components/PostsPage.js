import React, { Component } from 'react';
import styled from 'styled-components';
import FuzzySearch from 'fuzzy-search';
import SearchBar from './searchBar/SearchBar';
import PostContainer from './postsSection/PostContainer';
import uuid from 'uuid';

const PostsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  background: #fafafa;
`;

class PostsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        searchTerm: '',
        posts: props.posts,
        user: props.user,
    }
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
      
      localStorage.setItem('posts', JSON.stringify(newPosts));
      return { posts: newPosts };
    });
  }

  handleSearch = (e) => {
    const value = e ? e.target.value : ''
    this.setState(state => { 
      const newPosts = state.posts.map(post => {
        const searcher = new FuzzySearch([post], ['username'], { caseSensitive: false });
        const result = searcher.search(value);
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

      localStorage.setItem('posts', JSON.stringify(newPosts));
      return { 
        searchTerm: value,
        posts: newPosts,
      }
    });
  }

  handleAddComments = (e, id, commentText) => {
    e.preventDefault();

    this.setState(state => { 
      const newPosts = state.posts.map(post => {
        if(!commentText) {
          return {...post}
        }

        if(post.id === id) {
          return {
            ...post,
            comments: [...post.comments, {
              username: this.state.user,
              text: commentText
            }]
          }
        }

        return { ...post };
      });

      localStorage.setItem('posts', JSON.stringify(newPosts));
      return { 
        posts: newPosts,
      }
    });
  }

  render() {
    const { posts, searchTerm } = this.state;
    return (
      <>
       <SearchBar 
        searchTerm={searchTerm}
        handleSearch={this.handleSearch}
        logout={this.props.logout}
       />
       { posts &&
        <PostsWrapper>
          { posts.map(post => 
          !!post.display &&
            <PostContainer 
              key={post.timestamp} 
              handleLike={this.handleLike}
              handleAddComments={this.handleAddComments}
              {...post}
            />
            ) 
          }
        </PostsWrapper>
       }
      </>
    );
  }
}

export default PostsPage;
