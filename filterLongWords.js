//filterLongWords.js
//to filter out all words longer than maxLength from words[]

var maxLength = 6;
var words = ["super", "califrag", "il", "is", "tic", "ex", "pialidocious", "even", "though", "the", "sound", "of", "it", "is", "something", "quite", "atrocious"];
// var shortWords = [];

//use loop to go through the array
for (var i = 0; i < words.length; i++) {
	if (words[i].length > maxLength) {
		words.splice(i, 1);
	} 
}
console.log(words);