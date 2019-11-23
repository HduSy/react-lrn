import React, {useState, useContext} from 'react'

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    );
}

// useContext
const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};
const ThemeContext = React.createContext(themes)

function UseContextDemo() {
    return (
        <div>
            <h2>useContext</h2>
            <ThemeContext.Provider value={themes.dark}>
                <Toolbar/>
            </ThemeContext.Provider>
        </div>
    )
}

function Toolbar(props) {
    return (
        <div>
            <ThemeButton/>
        </div>
    )
}

function ThemeButton() {
    // 参数为React.createContext()的返回值
    // 距离当前组件最近的<MyContext.Provider>的prop-value决定
    const theme = useContext(ThemeContext)
    return (
        <button style={{background: theme.background, color: theme.foreground}}>
            I am styled by theme context!
        </button>
    )
}

export default UseContextDemo
