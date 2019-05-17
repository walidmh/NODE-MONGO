import React from "react";
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

class TodoList extends React.Component{
        state = {
            todos: [
                {text: "todo1"},
                {text: "todo2", checked: true, test: true}
            ]
        }
        handleNew = (text) => {
            const todo = {text};
            this.setState({
                    todos: [...this.state.todos, todo]
            });

        }
        render(){
        return <>
        <TodoForm onNew={this.handleNew} />
        <ul>
        {
            this.state.todos.map((item, index) =>
            <TodoItem key={index} {...item}/>
            )
        }
        </ul>
        </>
    }
}

export default TodoList;