import React from 'react'
//受控组件 state 成为唯一数据源
class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        console.log('提交的名字:'+this.state.value)
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value={'提交'}/>
            </form>
        )
    }
}
export default NameForm
