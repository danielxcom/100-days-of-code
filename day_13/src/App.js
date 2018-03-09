import React, { Component } from 'react';
import './App.css';

//stateless functional component
//shorthand for props.text...
const TodoItem = ({text}) => (
  <li>{text}</li>
  );

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this); //needed, otherwise this.setState doesn't exist and won't refer to component set.
  }
  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo]; //all todos spread, the second this.state.newTodo => add one more todo from input.
    this.setState({todos, newTodo:''});
  }
  render() {
    const {newTodo} = this.state; //grab new Todo out of state.
    const todos = this.state.todos.map((t, i)=> (
      <TodoItem key={i} text={t} />
      ));
      return (
        <div className="App">
          <h1>Simple Todolist</h1>
          <form onSubmit={this.handleSubmit}>
            <input //input for new todo to be typed.
              className="todo-input"
              autoComplete="off"
              type="text"
              name="newTodo"
              placeholder="Insert new todo list item."
              value={newTodo} //val equal to state coming from destructered const.
              onChange={(e) => this.setState({[e.target.name]: e.target.value })}
              //multiple inputs, baase key of new obj off whatever input.
              //now new view will be equal to whatever typed.
              //if key matches key will be correct in [...]
            />
            <button
              type="submit"
              className="save-button"
              >
              SAVE
              </button>
              </form>
              <div className="todo-content">
                <ol>
                  {todos}
                </ol>
              </div>
        </div>
        )
  }
}

export default App;
