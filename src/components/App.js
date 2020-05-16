import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todoList : []
    };
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = () => {
      this.setState({
          inputValue : "",
          todoList : [ ...this.state.todoList , this.state.inputValue]
      })
  }

  deleteTodo = (index) => {
    const newTodoList = this.state.todoList.filter((todo , todoIndex) =>
      todoIndex !== index
    );
    this.setState({ inputValue: "" , todoList : newTodoList})
  }


  render() {
    return (
      <div>
        <div>
          <h1>TODO</h1>
          <input
            type="text"
            placeholder="Write Something!"
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
            {this.state.todoList.map((todo , todoIndex) => 
                <li>
                <input type="checkbox"></input>
                  {todo}
                <span className="Delete" onClick={() => this.deleteTodo(todoIndex)}>X</span>
              </li>
                )}
        </ul>
      </div>
    );
  }
}

export default App;
