import React from 'react'
export default function Accessibility_KeyBoard() {
    return(
        <div>
            <h2>无障碍-键盘导航:</h2>
            <span>不会获取键盘tab焦点</span>
            <br/>
            <span tabIndex={'0'}>能够获得键盘tab焦点</span>
            <p>tabIndex设置为'0'就可获取键盘焦点 '-1'不可获取键盘和鼠标焦点</p>
            <ul id="mb1" tabIndex="0">
                <li id="mb1_menu1" tabIndex={'0'}> Font
                    <ul id="fontMenu" tabIndex={'0'} title="Font">
                        <li id="sans-serif" tabIndex={'0'}>Sans-serif</li>
                        <li id="serif" tabIndex={'0'}>Serif</li>
                        <li id="monospace" tabIndex={'0'}>Monospace</li>
                        <li id="fantasy" tabIndex={'0'}>Fantasy</li>
                    </ul>
                </li>
                <li id="mb1_menu2" tabIndex="-1"> Style
                    <ul id="styleMenu" title="Style" tabIndex="-1">
                        <li id="italic" tabIndex="-1">Italics</li>
                        <li id="bold" tabIndex="-1">Bold</li>
                        <li id="underline" tabIndex="-1">Underlined</li>
                    </ul>
                </li>
                <li id="mb1_menu3" tabIndex="-1"> Justification
                    <ul id="justificationMenu" title="Justication" tabIndex="-1">
                        <li id="left" tabIndex="-1">Left</li>
                        <li id="center" tabIndex="-1">Centered</li>
                        <li id="right" tabIndex="-1">Right</li>
                        <li id="justify" tabIndex="-1">Justify</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
