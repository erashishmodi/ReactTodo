import axios from 'axios';
import React, { Component } from 'react';
import TodoItems from './Components/ToDo/TodoItems';
import AddTodoItem from './Components/ToDo/AddTodoItem';

class App extends Component {

  url="http://103.235.105.76/plesk-site-preview/greenlifehealthcare.seminalwealth.com/todo";
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
      url: this.url,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response)=>{
      console.log(response);
      this.setState({todoItems:response.data});
    });
  };
  

  addTodoItem = (item) => {
    if(item.title.trim() != "")
    {
      axios.post(this.url, item)
    .then((response) => 
    {
      this.loadTodoData();
      console.log(response);
    },(error) => {
      console.log(error);
    });
    }else{
      alert("Please fill title compulsary.");
        }
    
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