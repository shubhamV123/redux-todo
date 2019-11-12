import React from 'react'
import { connect } from 'react-redux';
import { visibilityFilters } from '../actions'
import Todo from '../components/Todo'
import { toggleTodo } from '../actions';
const VisibleTodoList = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => (<li key={todo.id} style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
            }} onClick={() => toggleTodo(todo.id)}>
                <Todo   {...todo} />
            </li>))}
        </ul>
    )
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case visibilityFilters.SHOW_ALL:
            return todos
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            return todos;
    }
}
const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibleFilter)
});
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)
