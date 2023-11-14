function addNumbers(num1,num2){
    return num1+num2
}
function subtractNumbers(num1,num2){
    return num1-num2
}
function multiplyNumbers(num1,num2){
    return num1*num2
}
function divideNumbers(num1,num2){
    return num1/num2
}
let num1,
    operator,
    num2

function operate(num1,operator,num2){
    switch(operator){
        case '+' :
        return addNumbers(num1,num2)
        break
        case '-' :
        return subtractNumbers(num1,num2)
        break
        case '*' :
        return multiplyNumbers(num1,num2)
        break
        case '/' :
        return divideNumbers(num1,num2)
        break
    }
}