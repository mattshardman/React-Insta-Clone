import React, { Component } from 'react';
import './App.css';

import data from './dummy-data';
import PostsPage from './components/PostsPage';
import withAuth from './auth/authenticate';
import Login from './components/Login';

const persistedData = localStorage.getItem('posts');

class App extends Component {
  state = {
    posts: null,
  }

  componentDidMount() {
    const dataWithIds = data.map(each => ({
      ...each,
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
    const { posts } = this.state;
    const { isLoggedIn } = this.props;
    if (posts) {
      return (
        <div className="App">
        { 
          !isLoggedIn 
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

    return <div className="App">loading</div>;
  }
}

export default withAuth(App);
