import axios from 'axios';
import React, { Component } from 'react';
import TodoItems from './Components/ToDo/TodoItems';
import AddTodoItem from './Components/ToDo/AddTodoItem';

class App extends Component {
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
    // axios({
    //   method: 'get',
    //   url: ""
    // })
    // .then((response)=>{
    //   console.log(response);
    //   this.setState({todoItems:response});
    // });
    this.setState({
      todoItems: [
        {
          "todoId": 1,
          "title": "Website",
          "completed": true
        }
      ]
    });
  };

  addTodoItem = (item) => {
    console.log(item);
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        item
      ]
    });
    // axios.post("", item)
    // .then((response) => 
    // {
    //   this.loadTodoData();
    //   console.log(response);
    // },(error) => {
    //   console.log(error);
    // });
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