import { rword } from 'rword';
const wordCount = 14;
export const words = rword.generate(wordCount, {
  length: '6-11',
  capitalize: 'all',
});
