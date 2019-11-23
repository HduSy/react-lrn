import React from 'react'
import PropTypes from 'prop-types'
import Todo from "./Todo"

/**
 * 与Link相同的模式
 * @param todos
 * @param toggleTodo
 * @returns {*}
 * @constructor
 */
// props的形式id={}、completed={}、text={}
// toggleTodo触发dispatch
const TodoList = ({todos, toggleTodo}) => (
    <ul>
        {todos.map(todo =>
            <Todo key={todo.id} onClick={() => toggleTodo(todo.id)} {...todo}/>)}
    </ul>
)
// Todo: arrayof???shape???
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
}
export default TodoList
