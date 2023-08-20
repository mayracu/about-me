'use strict';

console.log('hello world!');


// DONE: Ask the user their name through a prompt()
// DONE: Display that name back to the user through a custom greeting welcoming them to your site.

let userName = prompt('Hi! What is your name?');
alert(`Hi ${userName}! welcome to my website! Let's play a guessing game, please answer yes/no OR y/n`);

let correctCount = 0;
// DONE:Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

let responseQ1 =prompt('Do I have a college degree?').toLowerCase();
if (responseQ1 === 'y' || responseQ1 === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
  correctCount += 1;
}
else if (responseQ1 === 'n' || responseQ1 === 'no'){
  //console.log('Sorry you are wrong. I have a college degree.');
  alert('Sorry you are wrong. I have a college degree.');
}



let responseQ2 =prompt('Am I studying software development?').toLowerCase();
if (responseQ2 === 'y' || responseQ2 === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
  correctCount += 1;
}
else if (responseQ2 === 'n' || responseQ2 === 'no'){
  //console.log('Sorry you are wrong. I\'m currently studying software development! :D');
  alert('Sorry you are wrong. I\'m currently studying software development! :D');
}


let responseQ3 =prompt('Do I know SQL?').toLowerCase();
if (responseQ3 === 'y' || responseQ3 === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
  correctCount += 1;
}
else if (responseQ3 === 'n' || responseQ3 === 'no'){
  //console.log('Sorry you are wrong. I studied SQL and I use it at work.');
  alert('Sorry you are wrong. I studied SQL and I use it at work.');
}

let responseQ4 =prompt('Am I bilingual?').toLowerCase();
if (responseQ4 === 'y' || responseQ4 === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
  correctCount += 1;
}
else if (responseQ4 === 'n' || responseQ4 === 'no'){
  //console.log('Sorry you are wrong. I am bilingual.');
  alert('Sorry you are wrong. I am bilingual.');
}

let responseQ5 =prompt('Would I like to learn Python programming language?').toLowerCase();
if (responseQ5 === 'y' || responseQ5 === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
  correctCount += 1;
}
else if (responseQ5 === 'n' || responseQ5 === 'no'){
  //console.log('Sorry you are wrong. I\'d like to learn Python!');
  alert('Sorry you are wrong. I\'d like to learn Python!');
}




let favoriteNumber = 7;


for (let i= 0; i < 4; i++){
  let userGuess = Number(prompt('Now guess my favorite number. Hint: It\'s a number between 1-20'));
  //let userTry = [userGuess.toString()];


  if (userGuess > favoriteNumber){
    alert('That number is too high!');
  }
  else if (userGuess < favoriteNumber){
    alert('That number is too low!');
  }
  else if (userGuess === favoriteNumber) {
    alert('You are correct!');
    correctCount += 1;
    break;
  }

  if (i === 3){
    alert('Sorry, you are out of attempts. The answer is 7.');
    break;
  }
}


/*As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.*/

let favoriteColors = ['GREEN', 'BLUE', 'PINK', 'PURPLE'];
for (let attempts = 0; attempts<8; attempts++){
  if (attempts === 7){
    alert('Sorry, you are out of attempts. My favorite colors are green, blue, pink and purple!');
    break;
  }

  let colors = (prompt('Guess one of my favorite colors!')).toUpperCase();
  for (let i = 0; i < favoriteColors.length; i++){
    if (colors === favoriteColors[i]){
      alert('You are right! That\'s one of my favorite colors! My favorite colors are green, blue, pink and purple!');
      attempts = 8;
      correctCount += 1;
      break;
    }
    /*else {
      alert('I\'m sorry you are wrong. That\'s not one of my favorite colors');
      break;*/
  }
}




/*
As a user, I would like to know my final score so that I can know how well I did.
Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.*/


alert(`Thank you ${userName} for playing my guessing game!`);

alert(`You had ${correctCount} correct answers!`);
























// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.



