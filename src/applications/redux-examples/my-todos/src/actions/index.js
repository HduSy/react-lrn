/**
 * 谨记
 * 将action值当做是对象
 * 不论是直接定义的常量对象
 * 还是通过函数返回的对象。
 * dispatch都通过其某个属性(常用type)执行相应操作
 * 官网:action是把数据从应用传递到store的有效载荷
 */
let nextTodoId = 0
/**
 * 增加todo
 * @param text
 * @returns {{id: number, text: *, type: string}}
 */
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})
/**
 * todo可视性过滤
 * all、active、completed
 * @param filter
 * @returns {{filter: *, type: string}}
 */
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
/**
 * filter种类
 * all、active、completed
 * @type {{}}
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
/**
 * todo完成划掉/未完成取消划掉状态
 * @param id
 * @returns {{id: *, type: string}}
 */
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})
