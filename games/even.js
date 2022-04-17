import greeting from '../src/cli.js';
import { countCorrectAnswers, getAnswer } from '../src/index.js';

const isEvenGame = () => {
  const userName = greeting();
  let correctCount = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (correctCount < 3) {
    const question = Math.floor(Math.random() * 20);
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    const isCorrect = getAnswer(question, correctAnswer, userName);
    correctCount += countCorrectAnswers(isCorrect, correctCount);
  }
  console.log(`Congratulations, ${userName}!`);
};
export default isEvenGame;
