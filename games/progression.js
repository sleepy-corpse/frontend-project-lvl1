import greeting from '../src/cli.js';
import { getAnswer } from '../src/index.js';

const progressionGame = () => {
  const userName = greeting();
  let correctCount = 0;
  console.log('What number is missing in the progression?');
  while (correctCount < 3) {
    const arr = [Math.floor(Math.random() * 40)];
    const step = Math.floor(Math.random() * 10) + 1;
    const progressionLength = Math.floor(Math.random() * 7) + 5;
    const miss = Math.floor(Math.random() * (progressionLength - 1));
    for (let i = 1; i < progressionLength; i += 1) {
      arr.push(arr[i - 1] + step);
    }
    const correctAnswer = String(arr[miss]);
    arr[miss] = '..';
    const question = arr.join(' ');
    if (!getAnswer(question, correctAnswer, userName)) {
      return 0;
    }
    correctCount += 1;
  }
  console.log(`Congratulations, ${userName}!`);
  return 0;
};
export default progressionGame;
