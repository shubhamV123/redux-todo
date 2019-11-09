import React from 'react'
import { connect } from 'react-redux';
import Todo from '../components/Todo'
const VisibleTodoList = ({ todos }) => {
    console.log("TODOS", 123123, todos)
    return (
        <ul>
            {todos.map(todo => (<li key={todo.id}>
                <Todo   {...todo} />
            </li>))}
        </ul>
    )
}
const mapStateToProps = (state) => console.log("State", state) || ({
    todos: state.todos
});

export default connect(mapStateToProps)(VisibleTodoList)
