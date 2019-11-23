import React from 'react'

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};
// 方式一创建context
// 方式二回调ref
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {
    }
})
