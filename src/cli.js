import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const user = readlineSync.question('Your answer: ');
  console.log(`Hello, ${user}!`);
};
export default greet;
