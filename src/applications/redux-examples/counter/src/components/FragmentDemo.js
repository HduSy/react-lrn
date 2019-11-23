import React from 'react'

function Columns(props) {
    return (
        <>
            <td>Hello</td>
            <td>World</td>
        </>
    )
}

function table(props) {
    return (
        <table>
            <tr>
                <Columns/>
            </tr>
        </table>
    )
}

// 传入key属性
function Glossary(props) {
    return (
        <dl>
            {props.items.map(item => (
                <React.Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </React.Fragment>
            ))}
        </dl>
    )
}
