import React, {useState, useEffect} from 'react'

export default function Counter_useEffect() {
    const [count, setCount] = useState(0)
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times!`
    })
    return (
        <div>
            <h2>useEffect</h2>
            <p>You click {count} times!</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}
