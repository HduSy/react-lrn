import Big from 'big.js'

export default function operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne || '0')
    // 若numberTwo为空则two值为'||'后面表达式的值
    // 若操作符是÷或x则two = 1 其它情况 two= 0
    const two = Big(numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0'))
    if (operation === '+') {
        return one.plus(two).toString()
    }
    if (operation === '-') {
        return one.minus(two).toString()
    }
    if (operation === 'x') {
        return one.times(two).toString()
    }
    if (operation === '÷') {
        if (two === '0') {
            // 此情况永远不会发生已规避
            alert('Divide by 0 error')
            return '0'
        } else {
            return one.div(two).toString()
        }
    }
    throw Error(`Unknown operation '${operation}'`)
}
