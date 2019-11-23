import {VisibilityFilters} from "../actions"
// 若action.type等于'SET_VISIBILITY_FILTER',就调用setVisibilityFilter(filter)返回action
// visibilityFilter就是全新的state啊
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}
export default visibilityFilter
