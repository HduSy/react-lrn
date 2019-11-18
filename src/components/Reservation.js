import React from 'react'

/**
 * 处理多个输入
 * 给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作
 */
class Reservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        // 对象初始化之计算属性名称
        // setState() 自动将部分 state 合并到当前 state,
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <label>
                    是否参与:
                    <input type="checkbox" name={'isGoing'} checked={this.state.isGoing}
                           onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    来宾人数:
                    <input type="number" name={'numberOfGuests'} value={this.state.number}
                           onChange={this.handleInputChange}/>
                </label>
            </form>
        )
    }
}

export default Reservation
