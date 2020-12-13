```js

import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import styled from 'styled-components';
import CommentList from './CommentList';
import CommentForm from './CommentForm';


export default class App extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    const persistedComments = localStorage.getItem('comments');

    if (persistedComments) {
      this.setState({ comments: JSON.parse(persistedComments) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState: ', prevState);
    console.log('this.state: ', this.state);

    if (prevState.comments !== this.state.comments) {
      localStorage.setItem('comments', JSON.stringify(this.state.comments));
    }
  }

  addComment = text => {
    const comment = {
      id: uuidv4(),
      text,
      createdAt: new Date().toISOString(),
    };

    this.setState(state => ({
      comments: [...state.comments, comment],
    }));
  };

  render() {
    return (
      <div>
        <CommentForm onAddComment={this.addComment} />
        <CommentList items={this.state.comments} />
      </div>
    );
  }
}

```
