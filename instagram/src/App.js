import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';

import data from './dummy-data';
import PostsPage from './components/PostsPage';
import withAuth from './auth/authenticate';
import Login from './components/Login';

const persistedData = localStorage.getItem('posts');

class App extends Component {
  state = {
    posts: null,
  }

  componentWillMount() {
    const dataWithIds = data.map(each => ({
      ...each,
      id: uuid(),
      display: true,
    }));

    if (persistedData) {
      const newData = JSON.parse(persistedData);
      return this.setState({ posts: newData });
    }

    localStorage.setItem('posts', JSON.stringify(dataWithIds));
    return this.setState({ posts: dataWithIds });
  }

  render() {
    if (this.state.posts) {
      return (
        <div className="App">
        { 
          !this.props.isLoggedIn 
          ?
          <Login {...this.props} />
          :
          <PostsPage 
            {...this.state} 
            {...this.props} 
          />
        }
        </div>
      );
    }

    return null;
  }
}

export default withAuth(App);
