import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from "../actions"
// 展示型+容器型组件=混合型组件
/**
 * 应用到了-回调函数返回refs
 */
const AddTodo = ({dispatch}) => {
    let input
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                // 此处能直接用input就是因为使用了回调ref
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node} type="text"/>
                <button type={'submit'}>
                    Add todoitem
                </button>
            </form>
        </div>
    )
}
// 只注入dispatch不监听state
export default connect()(AddTodo)
