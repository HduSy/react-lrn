import React from 'react'

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse
        return (
            <img src={'../../../public/logo192.png'} style={{position: 'absolute', left: mouse.x, top: mouse.y}}/>
        )
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render() {
        // 重点要看的
        return (
            <div style={{height: '100%'}} onClick={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

class MouseTracker extends React.Component {
    // 重点要看的
    render() {
        return (
            <div>
                <h2>props为函数接收mouse state数据为参数返回新组件</h2>
                <Mouse render={mouse => (<Cat mouse={mouse}/>)}/>
            </div>
        );
    }
}

export default MouseTracker
