import { rword } from 'rword';
const wordCount = 14;
export const words = rword.generate(wordCount, {
  length: '6-11',
});

function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export { randomWord };
