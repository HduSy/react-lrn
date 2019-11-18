import React from 'react'
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return (<p>The water would boil</p>)
    } else {
        return (<p>The water would not be boil</p>)
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

/**
 * 状态提升
 * 多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state。这就是所谓的“状态提升”
 */
class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
            scale: 'c'
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius)
        const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit)
        return (
            <div>
                <TemperatureInput scale={'c'} temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale={'f'} temperature={fahrenheit}
                                  onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={celsius}/>
            </div>
        )
    }
}

export default Calculator
