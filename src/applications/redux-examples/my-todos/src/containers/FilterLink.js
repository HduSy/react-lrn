import {connect} from 'react-redux'
import {setVisibilityFilter} from "../actions"
import Link from "../components/Link"
// 容器组件
// 从state tree中读取部分数据，通过props提供给要渲染的react组件
/**
 * 定义该函数Redux.store的改变将会被监听
 * 指定如何把当前redux store state映射到展示组件的props中
 * @param state
 * @param ownProps[属于我的props 这里面存在两个props一个是connect()而添加的一个是own props] 该参数的值为传递到组件的props，所以你会在FilterLink组件props上发现有个 filter prop
 * @returns 返回的纯对象与组件props结合
 */
const mapStateToProps = (store, ownProps) => ({
    active: ownProps.filter === store.visibilityFilter
})
/**
 * 接收dispatch作为参数并返回期望注入到展示组件的props中的回调方法
 * 方法名作为属性名，每个方法返回一个新的函数
 * 渲染Link组件并在点击时触发对应的action
 * @param dispatch
 * @param ownProps
 * @returns {{onClick: (function(): *)}}
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})
/**
 * redex与react组件连接
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
