import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props)
        //组件内部状态
        this.state = {seconds: 0}
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }))
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                Seconds:{this.state.seconds}
            </div>
        )
    }
}
export default Timer
