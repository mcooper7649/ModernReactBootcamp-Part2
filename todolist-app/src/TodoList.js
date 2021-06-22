import { Component } from "react";
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

import './TodoList.css'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
             todos: []
        };
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newTodo){
        this.setState({
            todos:[...this.state.todos, newTodo]
        })
    }
    remove(id){
        this.setState({
            todos:this.state.todos.filter(task => task.id !== id)
        })
    }

    update(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }

    render(){
        let todos = this.state.todos.map(todo => {
            return <Todo 
            key={todo.id} 
            id={todo.id} 
            completed={todo.completed}
            toggleTodo={this.toggleCompletion}
            updateTodo={this.update}
            removeTodo={this.remove} 
            task={todo.task} />
            
        });
        return (
            <div className="TodoList">
            <h1>Todo List!<span>A Simple React Todo List App.</span></h1>
            <ul>
            {todos}
            </ul>
            <NewTodoForm createTodo={this.create}/>
            
            </div>
        )
    
    }
}


export default TodoList;