import React from 'react';

import './App.css';

import Button from '@material-ui/core/Button';

class TodoApp extends React.Component{
  constructor() {
    super()
    this.state={
      todoList: [],
      value: "",
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="text">
          <b>
            <div className="container">
              <div class="neon">404</div>
              <div class="flux">ERROR</div>
            </div>
          </b>
        </h1>
        <div>
          <Button class="mdc-icon-button mdc-icon-button--on"aria-label="Unstar this item"
          aria-pressed="true">ホームに戻る</Button>
        </div>
      </div>
    );
  }
}
export default TodoApp;