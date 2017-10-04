var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
  ];
  
  function _allJokes() {
    return jokes;
}

function _getRandomJoke() {
    return jokes[Math.floor((Math.random() * jokes.length))];
}

function _addJoke(joke) {
    jokes.push(joke);
}

  module.exports = {
    allJokes : _allJokes,
    getRandomJoke : _getRandomJoke,
    addJoke : _addJoke
  }
    
