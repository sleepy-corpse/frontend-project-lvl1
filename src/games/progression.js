import { engine } from '../index.js';
import randomInt from '../random.js';

const generate = () => {
  const arr = [randomInt(0, 40)];
  const step = randomInt(1, 11);
  const progressionLength = randomInt(5, 12);
  const miss = randomInt(0, progressionLength);
  for (let i = 1; i < progressionLength; i += 1) {
    arr.push(arr[i - 1] + step);
  }
  const correctAnswer = String(arr[miss]);
  arr[miss] = '..';
  const question = arr.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => {
  const askThis = 'What number is missing in the progression?';
  engine(generate, askThis);
  return 0;
};
export default progressionGame;
