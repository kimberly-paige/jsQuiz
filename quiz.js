/*
1.ask 5 questions
2. keep track of number guessed correctly
3. number guessed innerHeight
4. rank the player
  5 = gold crown
  3-4 = silver crown
  1-2 = bronze
  0 = no crown
*/



//beginnning of quiz, no answers correct
var totalCorrect = 0;



//ask questions
var question1 = prompt("The sky is blue, true or false?");
if (question1 === "true") {
  totalCorrect += 1;
}

var question2 = prompt("Dogs are the best, true or false");
if (question2.toLowerCase() === "true") {
  totalCorrect += 1;
}


var question3 = prompt("You want kids one day, true or false");
if (question3.toLowerCase() === "true") {
  totalCorrect += 1;
}

var question4 = prompt("Chicken is yummy, true or false");
if (question4.toLowerCase() === "false") {
    totalCorrect += 1;
}

var question5 = prompt("Netflix and chill is the best, true or false");
if (question5.toLowerCase() === "true") {
    totalCorrect += 1;
}


//Quiz results
document.write("<h1>You got " + totalCorrect + " out of 5 questions correct!</h1>");

//Quiz Prize
if (totalCorrect === 5) {
  document.write("<h1>You get a gold crown!</h1>");
}

else if (totalCorrect >= 3) {
  document.write("<h1>You get a silver crown!</h1>");
}

else if (totalCorrect >= 1) {
  document.write("<h1>You get a bronze crown!</h1>");
}

 else {
  document.write("<h1>Sorry, no crown for you.</h1>");
}
