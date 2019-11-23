import React, {useState} from "react"

export default function Counter() {
    // 当前状态和一个让你更新它的函数
    // 唯一的参数就是初始state
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>useState</h2>
            <p>You click {count} times!</p>
            <button onClick={() => setCount(count + 1)}>
                Click
            </button>
        </div>
    )
}

