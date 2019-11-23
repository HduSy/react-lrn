// pure function
/**
 * @param state
 * @param action对象
 * @returns {number}
 */
export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
