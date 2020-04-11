import React, { Component } from 'react';

class AddTodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            titleError: "",
        }
    }

    onSubmitTodoItem = (evt) => {
        evt.preventDefault();
        console.log(this.state);
        if (this.isValidateInputs()) {
            this.props.addTodoItem({ title: this.state.title, completed: false });
            this.setState({ title: "" });
        }
    };
    onInputChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    isValidateInputs = () => {
        var isFormValid = true;
        var titleError = "";
        if (!this.state.title) {
            titleError = "Please enter title";
            isFormValid = false;
        }
        this.setState({ ...this.state, titleError });
        return isFormValid;
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitTodoItem} >
                    <input placeholder="To do title" type="text" name="title" value={this.state.title} onChange={this.onInputChange} />
                    <button>Add</button>
                    <br />
                    <span className="todo-item-error">{this.state.titleError}</span>
                </form>
            </div>
        );
    }
}

export default AddTodoItem;