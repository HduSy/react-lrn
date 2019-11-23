import React from 'react'

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
        this.focusTextInput = this.focusTextInput.bind(this)
    }

    focusTextInput() {
        this.textInput.current.focus()
    }

    render() {
        return (
            <div>
                <h2>为DOM元素添加ref</h2>
                <input type="text" ref={this.textInput}/>
                <input type="button" value={'Focus on this input'} onClick={this.focusTextInput}/>]
            </div>
        )
    }
}

class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }

    render() {
        return (
            <div>
                <h2>为class组件添加Ref</h2>
                <CustomTextInput ref={this.textInput}/>
            </div>
        )
    }
}
