const lowerValue = 10
const upperValue = 100
const secretNumber = generateRandomNumber()

function generateRandomNumber() {
    return parseInt(Math.random() * (upperValue - lowerValue) + lowerValue)
}

console.log(secretNumber);

const elementLowerValue = document.getElementById('lower-value')
elementLowerValue.innerHTML = lowerValue

const elementUpperValue = document.getElementById('upper-value')
elementUpperValue.innerHTML = upperValue