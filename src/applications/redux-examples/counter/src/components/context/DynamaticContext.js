import React from 'react'
import {ThemeContext, themes} from "./theme-context"
import ThemeTogglerButton from "./theme-toggler-button"

function Content() {
    return (
        <div>
            <ThemeTogglerButton/>
        </div>
    )
}

class DynamaticContext extends React.Component {
    constructor(props) {
        super(props)
        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }))
        }
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        }
    }

    // 订阅了ThemeContext
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <h2>订阅与消费context</h2>
                <Content/>
            </ThemeContext.Provider>
        )
    }
}

export default DynamaticContext
