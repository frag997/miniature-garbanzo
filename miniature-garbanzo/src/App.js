import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: 'Hello World!',
      newTodo: '',
      todos: [{
        title: 'Learn React',
        done: false
      },
      {
        title: 'Learn React Native',
        done: false
      }]
    };
  }

  formSubmitted(event){
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
  }

  newTodoChanged(event){
    this.setState({
      newTodo: event.target.value
    })
  }

  toggleTodoDone(event, index){
    const todos = [...this.state.todos]; // copy the array
    todos[index] = {...todos[index]}; // copy the todo
    todos[index].done = event.target.checked; // update done property on copied array
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={this.formSubmitted.bind(this)}>
          <label htmlFor="newTodo">New Todo</label>
          <input 
            onChange={(event) => this.newTodoChanged(event)} 
            id="newTodo" 
            name="newTodo"
            value={this.state.newTodo}>
          </input>
          <button type="submit">Add Todo</button>
        </form>

        <ul>
          {this.state.todos.map((todo, index) => {
              return (<li key={todo.title}>
                  <input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox"/>
                  <span className={todo.done ? 'done' : ''}>{todo.title}</span>
          </li>)})}
        </ul>
      </div>
    );
  }
}

export default App;
