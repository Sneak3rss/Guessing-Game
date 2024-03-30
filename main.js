function guessNumber(){
    let playerGuess;
    const numberToGuess = Math.ceil(Math.random() * 10);

    prompt('Devinez le nombre entre 1 et 10 inclus.');

    while(playerGuess != numberToGuess){
        playerGuess = prompt('Essayer à nouveau de devinez le nombre entre 1 et 10 inlcus.');
    }

    alert('Félicitation! Le nombre était ' + numberToGuess + ' !');
}

guessNumber();
