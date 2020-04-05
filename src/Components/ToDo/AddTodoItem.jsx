import React, { Component } from 'react';

class AddTodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }

    onSubmitTodoItem = (evt) => {
        evt.preventDefault();
        console.log(`submited title : ${this.state.title}`);
        this.props.addTodoItem({title:this.state.title,completed:false});
        this.setState({ title: "" });
    };
    onInputChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitTodoItem} >
                    <input type="text" name="title" value={this.state.title} onChange={this.onInputChange} />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddTodoItem;