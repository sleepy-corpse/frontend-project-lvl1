import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('May I have your name?');
  const name1 = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name1}!`);
};
export default greeting;
