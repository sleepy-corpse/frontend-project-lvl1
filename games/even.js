import greeting from '../src/cli.js';
import { getAnswer } from '../src/index.js';

const isEvenGame = () => {
  const userName = greeting();
  let correctCount = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (correctCount < 3) {
    const question = Math.floor(Math.random() * 20);
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    if (!getAnswer(question, correctAnswer, userName)) {
      return 0;
    }
    correctCount += 1;
  }
  console.log(`Congratulations, ${userName}!`);
  return 0;
};
export default isEvenGame;
