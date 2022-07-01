const Joke = require('awesome-dev-jokes');
 
function getJoke(){
    return Joke.getRandomJoke()
}

module.exports =getJoke;
 