import React from 'react'
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
    componentDidMount() {
        this.timeId = setInterval(()=>this.tick(),1000)
    }
    componentWillUnmount() {
        clearInterval(this.timeId)
    }

}

export default Clock
