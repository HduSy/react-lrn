/**
 * 不直接修改state中的字段，而是返回新的对象
 * 新的对象又是基于action中的数据创建的
 * 参数里初始化的state tree的构成
 * @param state
 * @param action
 * @returns {(*|{completed: boolean})[]|*[]|Array}
 */
// todos就是全新的state啊
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
        default:
            return state
    }
}
export default todos
