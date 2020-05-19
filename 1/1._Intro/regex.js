// const myReqEx = /Hello/i;

// const result = myReqEx.test("Hello world");

// Pipe = or

const petString = "Anders has an alpaca";

const petReqEx = /alpaca|cow|sheep/;

// const result = petReqEx.test(petString);

// console.log(result);

// Match

// const extractString = "Extract this word from the string";

// const wordReqex = /word/;

// console.log(extractString.match(wordReqex));

// The G flag

// console.log("Repeat, Repeat, Repeat".match(/Repeat/g));

const twinkle = "Twinkle, twinkle, little star";

console.log(twinkle.match(/[a-z]/ig));
// console.log(twinkle.match(/Twinkle/ig));

// Wildcards

const humStr = "That's humbug!";
const hugStr = "I need a hug.";
const huReqex = /hu./; //;

// console.log(humStr.match(huReqex));
// console.log(hugStr.match(huReqex));

// "He's a fun 'un"
// console.log("He's a fun 'un".match(/.un/g));

// Wildcard II - One of the following letters
// console.log("I found big bugs in my bag".match(/b[aiu]g/ig));

// Exercise: find all the vowels above!

// console.log("I found big bugs in my bag".match(/[aeiou]g/ig));

// Range

// console.log("123abc456".match(/[0-9]/g));


