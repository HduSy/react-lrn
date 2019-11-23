import React from 'react'

function CustomTextInput(props) {
    // 组件间传递refs
    return (
        <div>
            <input ref={props.inputRef}/>
        </div>
    );
}

// 支持回调形式传递refs
class Parent extends React.Component {
    render() {
        return (
            <CustomTextInput
                inputRef={el => this.inputElement = el}
            />
        );
    }
}
