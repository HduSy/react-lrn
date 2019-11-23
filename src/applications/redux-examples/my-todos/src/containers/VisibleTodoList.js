import {connect} from 'react-redux'
import {toggleTodo} from "../actions"
import TodoList from "../components/TodoList"
import {VisibilityFilters} from "../actions"
// 容器组件
/**
 * 根据当前显示的状态对todo列表进行过滤
 * @param todos
 * @param filter
 * @returns {*}
 */
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
        default:
            throw new Error('Unkown filter: ' + filter)
    }
}
// 将redux与react元素连接
/**
 * 计算传到TodoList中的props
 * 根据state.visibilityFilter
 * @param store
 * @returns {{todos: *}}
 */
const mapStateToProps = store => ({
    todos: getVisibleTodos(store.todos, store.visibilityFilter)
})
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
