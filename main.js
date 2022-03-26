// 1) change string to array
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let storyWords = story.split(' ');
//  2) create new array "BetterWords" without the unnecessary words
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
length = storyWords.length;
let betterWords = storyWords.filter((word) => word !== 'extremely' && word !== 'literally' && word !== 'actually');
// 3) provide count of overused words
let overusedWords = ['really', 'very', 'basically'];

  let reallyCount = 0;
  let veryCount = 0;
  let basicallyCount = 0;

for (word of storyWords) {
  if (word === 'really') {
    reallyCount += 1
} else if (word === 'very') {
    veryCount += 1
} else if (word === 'basically') {
    basicallyCount +=1
}
}
console.log('Really occurs ' + reallyCount + ' times');
console.log('Very occurs ' + veryCount + ' times');
console.log('Basically occurs ' + basicallyCount + ' time');
// Really occurs 2 times; Very occurs 5 times; Basically occurs 1 time;

//  console.log('There are ' + numSentences + ' in this story');

let sentences = 0;
betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences += 1;
 }
});
console.log('There are ' + sentences + ' sentences in this story');
// there are 12 sentences in this story 

console.log('There are ' + length + ' words in this story; there are ' + sentences + ' sentences in this story; and there are a number of overused words in this story: Really: ' + reallyCount  + ', Very: ' + veryCount + ', and Basically: ' + basicallyCount + '.');

//There are 188 words in this story; there are 12 sentences in this story; and there are a number of overused words in this story: Really: 2, Very: 5, and Basically: 1.
