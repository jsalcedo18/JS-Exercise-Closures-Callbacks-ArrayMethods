// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
 
// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 		The difference between counter 1 and counter 2, is counter 1 has a function inside of a function; so counter 1 will be returning 
 *    counterMaker by counting up from 0. Now counter 2 is its own function
 
 * 2. Which of the two uses a closure? How can you tell?
 *    Of the 2, counter 1 uses a closure because function counter reaches out of its scope to counterMaker, to understand that it is counting 
 *    from 0 (let count = 0;) which is inside of counterMakers function. While counter 2 is its own function
 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
     counter 1 would be preferable when you need a funtion to calculate something, in order to provide information for the parent function 
     to create information that would make an option to use it later along the code; verus just making it independent to that one function. 
     For example; you need the child function to calculate how much wood One yard needs. That child function is then used by the parent 
     function whose determining how much wood a whole block needs. Now if you were doing even bigger calculations for a whole neighborhood, 
     you would be able to reference back to that function. Now for counter 2, its an independent function that would just count an item from 0; 
     and all its information needed is the item its counting up for; it doesn't need any additional.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
      return function counter() {
        count++; //Counting up from 0
        }
}//Function CounterMaker End

const counter1 = counterMaker();
// counter2 code
  let count = 0;

function counter2() {
  return count++;
}//Function Counter 2 End

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(score) {
  return Math.floor(Math.random() * Math.floor(score));
}

console.log(inning(3));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/ 
// Worked with Britt's Q&A: I have notes with comprehension (if need to see)...

function finalScore(inningCB, inngingsNum( {
	let homeScore = 0;
	let awayScore = 0;
	
	for(let i = 0, I < inningsNum; i++) {
		homeScore = homeScore + inningCB();
		awayScore = awayScore + inningCB();
	} //for loop end
	
	return {
		Home: homeScore,
		Away: awayScore,
	}//return loop end
}//finalScore loop end

Console.log('Task 3: ',  finalScore(inning, 9));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

// Worked with Britt's Q&A: I have notes with comprehension (currently working on)...

function getInningScore (inningCB) {
	return {
		Home: inningCB(),
		Away: inningCB(),
	}//return loop end
}//getInningScore end

function scoreboard (inningScoreCB, inningCB, inningsNum) {
	Const scoreByInning = [];
	
	let homeScore = 0;
	let awayScore = 0;
	
	for(let i = 0; i < innings, i++) {
		const currentInning = inningScoreCB(inningCB);
		homeScore = homeScore + currentInning.Home
		awayScore = awayScore + currentInning.Away
		scoreByInning.push(`Inning ${ i + 1}: Away ${currentInning.Away} - Home: ${currentInning.Home}`);
	}//scoreBoard loop end
	
	If (homeScore === awayScore) {
		scoreByInning.push(`you will need to play another inning`);
	}else{
		scoreByInning.push(`Final Score: Away: ${awayScore} - Home: ${homeScore}`);
	}
	
	return scoreByInning;
	
}//scoreboard end

Console.log('Task 4: ', scoreboard(getInningScore, inning, 9));



