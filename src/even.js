/* eslint-disable indent */
import readlineSync from 'readline-sync';

export const getName = () => {
  console.log('Welcome to the Brain Games');
  console.log('May I have your name?');
  const name1 = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name1}!`);
  return name1;
};

export const isEvenGame = (userName) => {
    let correctAnswers = 0;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    while (correctAnswers < 3) {
        const num = Math.floor(Math.random() * 20);
        const even = (num % 2 === 0) ? 'yes' : 'no';
        console.log(`Question: ${num}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === even) {
            correctAnswers += 1;
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even}'.`);
            console.log(`Let's try again, ${userName}`);
            correctAnswers = 0;
        }
    }
    console.log(`Congratulations, ${userName}!`);
};
