import axios from 'axios';
import React, { Component } from 'react';
import TodoItems from './Components/ToDo/TodoItems';

class App extends Component {
  constructor(props) {
    super(props);    
    this.state={todoItems:[]};
  }; 
 
  componentDidMount() {
    axios({
      method: 'get',
      url: ""
    })
    .then((response)=>{
      console.log(response);
      this.setState({todoItems:response});
    });
  };

  render() {   
    return (
      <div>
        <TodoItems items={this.state.todoItems}/>
      </div>
    );
  }
}


export default App;