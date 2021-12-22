const generateExpression = (operations, digits) => {
    let expression = "";
    let randomNumber, randomOperation;
    if (operations.length > 0) {
        for (let i = 0; i < operations.length; i++) {
            randomNumber = getRandomIntInclusive(10 ** digits / 10, 10 ** digits - 1);
            randomOperation = operations[getRandomIntInclusive(0, operations.length - 1)];
            expression = expression + randomNumber + " " + randomOperation + " ";
        }
        expression += getRandomIntInclusive(10 ** digits / 10, 10 ** digits - 1);
    }
    return expression;
}

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const formatTime = (seconds) => {
    let date = new Date(seconds * 1000);
    return date.toTimeString().substr(3, 5);
}

const checkResult = (expression, answer) => {
    let result = parseFloat(eval(expression))
        .toFixed(1)
        .toString();
    if (result.split(".")[1] === "0") result = result.split(".")[0];
    return result === answer;
}

export { generateExpression, formatTime, checkResult };