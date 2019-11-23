import React, {useReducer} from 'react'

const initialState = {count: 0};

function init(initialState) {
    return {count: initialState}
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return init(action.payload)
        default:
            throw new Error()
    }
}

function UseReducerDemo() {
    const [state, dispatch] = useReducer(reducer, initialState, init)
    return (
        <div>
            {/*<span>Count: {state.count}</span>*/}
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    )
}

export default UseReducerDemo
