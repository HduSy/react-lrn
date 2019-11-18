import React from 'react'

require('./WelcomeDialog.css')

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {/*将任意组件作为子组件传递*/}
            {props.children}
        </div>
    );
}

// <FancyBorder> jsx标签中的所有内容都作为props.children传入FancyBorder组件
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

// 特例关系
function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!"/>
    );
}

export default WelcomeDialog
