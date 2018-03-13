/*global fetch*/
import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from './api';

class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo=this.addTodo.bind(this);
    }
    
    
    componentWillMount() {
        this.loadTodos()
    }
    
    
    async loadTodos(){
        //wait for fetch to check err.
        let todos=await apiCalls.getTodos();
        this.setState({todos})
    }
    
    async addTodo(val) {
        let newTodo = await apiCalls.createTodo(val);
        this.setState({todos: [...this.state.todos, newTodo]});
    }
    
    async deleteTodo(id) {
        await apiCalls.deleteTodo(id);
        const todos = this.state.todos.filter(todo => todo._id !== id) //get rid of what we try to delete.
        this.setState({todos:todos});    
    }
    
    async toggleTodo(todo) {
         let updatedTodo = await apiCalls.updateTodo(todo);
         const todos = this.state.todos.map(t => 
           (t._id===updatedTodo._id)
           ?
           {...t, completed: !t.completed}
           : t
           )
         this.setState({todos:todos})
    }
    
    render() {
        //onDelete binds here as we need to pass in data for each particular todo.
        //second param t._id says for each todo item, t is the item, tae it, take the id, pass it in.
        const todos = this.state.todos.map((t) => (
            <TodoItem 
                key={t._id}
                {...t}
                onDelete={this.deleteTodo.bind(this, t._id)}
                onToggle={this.toggleTodo.bind(this, t)}
            /> 
            ));
        return (
            <div>
                <h1>Todo List!</h1>
                <TodoForm addTodo={this.addTodo} />
                <ul>
                    {todos}
                </ul>
            </div>
            )
    }
}

export default TodoList;