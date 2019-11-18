import Big from "big.js";
import isNumber from "./isNumber";
import operate from "./operate";

export default function calculate(obj, buttonName) {
    if (buttonName === 'AC') {
        return {
            total: null,
            next: null,
            operation: null
        }
    }
    // 按了数字
    if (isNumber(buttonName)) {
        if (buttonName === '0' && obj.next === '0') {
            return {}
        }
        // If there is an operation, update next
        // 12+1111111111
        // 12+1
        if (obj.operation) {
            // 第一次运算，第一个操作数存在，操作符存在
            if (obj.next) {
                return {
                    next: obj.next + buttonName
                }
            }
            // 第一次运算 next赋了total next为null
            return {
                next: buttonName
            }
        }
        // If there is no operation, update next and clear the value
        if (obj.next) {
            const next = obj.next === '0' ? buttonName : obj.next + buttonName
            return {
                next,
                total: null
            }
        }
        return {
            next: buttonName,
            total: null
        }
    }
    if (buttonName === '%') {
        // 若操作符、next存在则先运算再用结果×%
        if (obj.operation && obj.next) {
            const result = operate(obj.total, obj.next, obj.operation)
            return {
                total: Big(result).div(Big('100')).toString(),
                next: null,
                operation: null
            }
        }
        if (obj.next) {
            return {
                next: Big(obj.next).div(Big('100')).toString()
            }
        }
        if (obj.total) {
            return {
                total: Big(obj.total).div(Big('100')).toString()
            }
        }
        return {}
    }
    if (buttonName === '.') {
        if (obj.next) {
            if (obj.next.includes('.')) {
                return {}
            }
            return {
                next: obj.next + '.'
            }
        }
        return {
            next: '0.'
        }
    }
    if (buttonName === '=') {
        if (obj.next && obj.operation) {
            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null
            }
        } else {
            // '=' with no operation, nothing to do
            return {}
        }
    }
    if (buttonName === '+/-') {
        if (obj.next) {
            return {
                next: (-1 * parseFloat(obj.next)).toString()
            }
        }
        if (obj.total) {
            return {
                total: (-1 * parseFloat(obj.total)).toString()
            }
        }
        return {}
    }
    // User pressed an operation button and there is an existing operation
    if (obj.operation) {
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName
        }
    }
    if (!obj.next) {
        return {
            operation: buttonName
        }
    }
    // save the operation and shift 'next' into 'total'
    return {
        total: obj.next,
        next: null,
        operation: buttonName
    }
}
