import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    }
    // state
    static propTypes = {
        value: PropTypes.string.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    }
    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }
    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const {value, onIncrement, onDecrement} = this.props
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>+</button>
                {' '}
                <button onClick={onDecrement}>-</button>
                {' '}
                <button onClick={this.incrementIfOdd}>increment if odd</button>
                {' '}
                <button onClick={this.incrementAsync}>increment async</button>
            </p>
        )
    }
}
