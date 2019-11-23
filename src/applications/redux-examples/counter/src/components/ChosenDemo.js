import $ from 'jquery'
import React from 'react'

class Chosen extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);
        // this.el.chosen(); // 找不到chosen函数
        this.handleChange = this.handleChange.bind(this);
        this.$el.on('change', this.handleChange);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.children !== this.props.children) {
            this.$el.trigger("chosen:updated");
        }
    }

    componentWillUnmount() {
        this.$el.off('change', this.handleChange);
        this.$el.chosen('destroy');
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <h2>第三方库</h2>
                <select className="Chosen-select" ref={el => this.el = el}>
                    {this.props.children}
                </select>
            </div>
        );
    }
}

export default function ChosenDemo() {
    return (
        <Chosen onChange={value => console.log(value)}>
            <option>vanilla</option>
            <option>chocolate</option>
            <option>strawberry</option>
        </Chosen>
    );
}


function Repeat(props) {
    let items = []
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i))
    }
    return <div>{items}</div>
}

// children为函数
function ListOfTenThings() {
    return (
        <Repeat numTimes={10}>
            {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
    )
}
