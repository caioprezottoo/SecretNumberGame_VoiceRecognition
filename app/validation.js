const congrats = new Audio('./audio/congrats.mp3');

function verifyValidGuess(guess) {
    const number = +guess

    if (invalidGuess(number)) {
        elementGuess.innerHTML += '<div class="invalid">INVALID GUESS</div>'
        return
    }

    if (numberLowerOrHigherThanAllowed(number)) {
        elementGuess.innerHTML += '<div class="invalid">INVALID GUESS</div>'
        return
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
            <h1>Congratulations!</h1>
            <h3>The Secret Number was ${secretNumber}</h3>
        `
        congrats.play();
    } else if (number > secretNumber) {
        elementGuess.innerHTML += `
            <div>The secret number is lower <i class="fa-solid fa-caret-down"></i></div>
        `
    } else if (number < secretNumber) {
        elementGuess.innerHTML += `
            <div>The secret number is higher <i class="fa-solid fa-caret-up"></i></div>
        `
    }
}

function invalidGuess(number) {
    return Number.isNaN(number);
}

function numberLowerOrHigherThanAllowed(number) {
    return number < lowerValue || number > upperValue;
}