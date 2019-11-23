import React from 'react'

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = null
        /**
         * 函数中接受React组件实例或HTML DOM元素作为参数
         * 挂载是调用ref回调函数传入DOM元素，卸载时调用ref回调函数传入null
         * @param element
         */
        this.setTextInput = element => {
            this.textInput = element
        }
        // 使用原生DOM API使text输入框获得焦点
        this.focusTextInput = () => {
            if (this.textInput)
                this.textInput.focus()
        }
    }

    // 组件挂载后，让文本框自动获得焦点
    componentDidMount() {
        this.focusTextInput()
    }

    render() {
        // 使用`ref`的回调函数将text输入框DOM节点的引用存储到React实例上
        return (
            <div>
                <h2>回调Ref</h2>
                <p>更精细地控制何时 refs 被设置和解除,函数中接受React组件实例或HTML DOM元素作为参数</p>
                <input type="text" ref={this.setTextInput}/>
                <input type="button" value={'Focus on this input'} onClick={this.focusTextInput}/>
            </div>
        );
    }
}

export default class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }

    componentDidMount() {
        this.textInput.current.focusTextInput()
    }

    render() {
        return (
            <div>
                <CustomTextInput ref={this.textInput}/>
            </div>
        )
    }
}
