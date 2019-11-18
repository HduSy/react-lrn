import React from 'react'

class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isToggleOn: true
        }
        //为了在回调函数中使用`this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this)
    }
    //事件处理函数
    handleClick(){
        this.setState(state=>(
            {isToggleOn:!state.isToggleOn}
        ))
    }
    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
        )
    }
}
export default Toggle
