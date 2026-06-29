function rollDice() {
    const list = document.querySelectorAll('img');
    const first = Math.floor(Math.random() * 6) + 1;
    const imagefirst = `assets/inverted-dice-${first}.png`;
    list[0].setAttribute('src', imagefirst);

    const second = Math.floor(Math.random() * 6) + 1;
    const imagesecond = `assets/inverted-dice-${second}.png`;
    list[1].setAttribute('src', imagesecond);

    if (first > second) {
        document.querySelector('h1').innerHTML = 'Player 1 Wins!';
    } else if (first < second) {
        document.querySelector('h1').innerHTML = 'Player 2 Wins!';
    } else {
        document.querySelector('h1').innerHTML = 'Draw!';
    }
}

rollDice();
