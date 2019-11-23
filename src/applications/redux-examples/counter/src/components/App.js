import React from 'react'
import Counter_useState from "./Counter_useState"
import Counter_useEffect from "./Counter_useEffect"
import UseContextDemo from "./UseContextDemo"
import RefDemo from "./RefDemo"
import Accessibility_KeyBoard from "./Accessibility_keyboard"
import AutoFocusTextInput from "./AutoFocusTextInput"
import CodeSplit from "./CodeSplit"
import DynamaticContext from "./context/DynamaticContext"
import BoundaryCounter from "./BoundaryCounter"
import ChosenDemo from "./ChosenDemo"
import MouseTracker from "./RenderPropsDemo/MouseTracker"
export default function App() {
    return (
        <div>
            <Counter_useState/>
            <Counter_useEffect/>
            <UseContextDemo/>
            <RefDemo/>
            <AutoFocusTextInput/>
            <CodeSplit/>
            <DynamaticContext/>
            <BoundaryCounter/>
            <ChosenDemo/>
            <MouseTracker/>
            <Accessibility_KeyBoard/>
        </div>
    )
}
