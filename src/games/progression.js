import { engine } from '../index.js';
import randomInt from '../random.js';

const progressionGame = () => {
  const askThis = 'What number is missing in the progression?';
  const question = [];
  const correctAnswer = [];
  for (let k = 0; k < 3; k += 1) {
    const arr = [randomInt(0, 40)];
    const step = randomInt(1, 11);
    const progressionLength = randomInt(5, 12);
    const miss = randomInt(0, progressionLength);
    for (let i = 1; i < progressionLength; i += 1) {
      arr.push(arr[i - 1] + step);
    }
    correctAnswer[k] = String(arr[miss]);
    arr[miss] = '..';
    question[k] = arr.join(' ');
  }
  engine(question, correctAnswer, askThis);
  return 0;
};
export default progressionGame;
