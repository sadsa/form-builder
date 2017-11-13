import React, { Component } from 'react';
import DynamicForm from './components/dynamicForm/dynamicForm';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col">
              <DynamicForm onSubmit={this.submit}></DynamicForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
  submit = (values) => {
    console.log(values);
  }
}

export default App;
