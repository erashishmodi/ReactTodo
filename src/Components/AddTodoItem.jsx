import React, { Component } from 'react';

class AddTodoItem extends Component {

    onSubmitTodoItem=(evt)=>{
        evt.preventDefault();
    };

    render() {
       
        return (
            <div>
                <form onSubmit={this.onSubmitTodoItem} >
                    <input type="text" />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddTodoItem;