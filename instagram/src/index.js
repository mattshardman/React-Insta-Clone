import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SinglePost from './components/SinglePost';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render( 
    <BrowserRouter>
        <>
            <Route path="/post/:id" component={SinglePost} />
            <Route exact path="/" component={App} />
        </>
    </BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
