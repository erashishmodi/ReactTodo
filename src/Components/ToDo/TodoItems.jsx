import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItems extends Component {
       
    render() {        
        const items= this.props.items;
        return (
            <ul>
                {
                    items.map((item)=>{ return <TodoItem key={item.id} item={item} />})
                }
            </ul>
        );
    }

}

export default TodoItems;