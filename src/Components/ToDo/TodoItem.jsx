import React, { Component } from 'react';

class TodoItem extends Component {
    getItemClass(item){
        const className= (item.completed)?"todo-item-completed": "todo-item";
        return className;
    }
    render() {
        var item=this.props.item;        
        return (
            <li className={this.getItemClass(item)}>
                {item.title}
            </li>
        );
    }
}

export default TodoItem;