import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todoText: "",
      todos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // Set the state with value from the input
    this.setState({
      todoText: event.target.value
    });
  }

  handleSubmit(event) {
    // Prevent the default form submission process
    // Concat with the todos array the text in the form input
    // Log to the console the array
    event.preventDefault();

    this.setState({
      todos: this.state.todos.concat([this.state.todoText])
    });

    console.log(this.state.todos);
  }

  render() {
    return (
      <div>
        <div className="small-container well">
        	<div className="bold">
        		What do you want to do today?
        	</div>

          <form onSubmit={this.handleSubmit}>
          	<div className="margin-top-20">
          		<input onChange={this.handleChange} name="todoText" type="text" className="form-control" placeholder="Your todo..." />
          	</div>

          	<div className="margin-top-20">
          		<button type="submit" id="submit-todo" className="btn btn-primary">Submit Todo</button>
          	</div>
          </form>
        </div>

        <div id="todo-list" className="small-container">
        	<ol>
        		<li>I want to go shopping <a href="#">Done</a></li>
        		<li>Clean the house <a href="#">Done</a></li>
        	</ol>
        </div>
      </div>
    );
  }
}

export default TodoList;
