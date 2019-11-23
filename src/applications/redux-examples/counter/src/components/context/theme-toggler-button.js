import React from 'react'
import {ThemeContext} from "./theme-context"

/**
 * 函数接收当前的 context 值，返回一个 React 节点
 * @returns {*}
 * @constructor
 */
function ThemeTogglerButton() {
    // 消费了ThemeContext
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button onClick={toggleTheme} style={{backgroundColor: theme.background, color: theme.foreground}}>
                    ToggleTheme
                </button>
            )}
        </ThemeContext.Consumer>
    )
}

export default ThemeTogglerButton
