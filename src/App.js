import axios from 'axios';
import React, { Component } from 'react';
import TodoItems from './Components/ToDo/TodoItems';
import AddTodoItem from './Components/ToDo/AddTodoItem';

class App extends Component {

  url = "http://103.235.105.76/plesk-site-preview/greenlifehealthcare.seminalwealth.com/todo";
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    };
  };

  componentDidMount() {
    this.loadTodoData();
  };

  loadTodoData() {
    axios({
      method: 'get',
      url: this.url
    }).then((response) => {
      console.log(response);
      this.setState({ todoItems: response.data });
    });
  };

  addTodoItem = (item) => {
    axios.post(this.url, item)
      .then((response) => {
        this.loadTodoData();
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="todo-app">
        <AddTodoItem addTodoItem={this.addTodoItem} />
        <TodoItems items={this.state.todoItems} />
      </div>
    );
  }
}


export default App;