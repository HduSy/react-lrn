import React from 'react'

class RefDemo extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }

    focusTextInput = () => {
        this.textInput.current.focus()
    }

    render() {
        return (
            <div>
                <h2>React.createRef() Ref</h2>
                <p>ref的current属性值为DOM元素节点</p>
                <input ref={this.textInput} type="text"/>
                <input type="button" value={'Focus the text input'} onClick={this.focusTextInput}/>
            </div>
        )
    }
}

export default RefDemo
