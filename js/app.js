'use strict';

console.log('hello world!');


// DONE: Ask the user their name through a prompt()
// DONE: Display that name back to the user through a custom greeting welcoming them to your site.

let userName = prompt('Hi! What is your name?');
alert(`Hi ${userName}! welcome to my website! Let's play a guessing game, please answer yes/no OR y/n`);

// DONE:Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

let responseQ1 =prompt('Do I have a college degree?').toLowerCase();
if (responseQ1 === 'y' || responseQ1 === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
}
else if (responseQ1 === 'n' || responseQ1 === 'no'){
  //console.log('Sorry you are wrong. I have a college degree.');
  alert('Sorry you are wrong. I have a college degree.');
}



let responseQ2 =prompt('Am I studying software development?').toLowerCase();
if (responseQ2 === 'y' || responseQ2 === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
}
else if (responseQ2 === 'n' || responseQ2 === 'no'){
  //console.log('Sorry you are wrong. I\'m currently studying software development! :D');
  alert('Sorry you are wrong. I\'m currently studying software development! :D');
}


let responseQ3 =prompt('Do I know SQL?').toLowerCase();
if (responseQ3 === 'y' || responseQ3 === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
}
else if (responseQ3 === 'n' || responseQ3 === 'no'){
  //console.log('Sorry you are wrong. I studied SQL and I use it at work.');
  alert('Sorry you are wrong. I studied SQL and I use it at work.');
}

let responseQ4 =prompt('Am I bilingual?').toLowerCase();
if (responseQ4 === 'y' || responseQ4 === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
}
else if (responseQ4 === 'n' || responseQ4 === 'no'){
  //console.log('Sorry you are wrong. I am bilingual.');
  alert('Sorry you are wrong. I am bilingual.');
}

let responseQ5 =prompt('Would I like to learn Python programming language?').toLowerCase();
if (responseQ5 === 'y' || responseQ5 === 'yes'){
  //console.log('You are correct!');
  alert('You are correct!');
}
else if (responseQ5 === 'n' || responseQ5 === 'no'){
  //console.log('Sorry you are wrong. I\'d like to learn Python!');
  alert('Sorry you are wrong. I\'d like to learn Python!');
}

alert(`Thank you ${userName} for playing my guessing game!`);

// Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.




// Display the user’s name back to them in your final message to the user.
