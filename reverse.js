var inputString = "building"

//split by empty string
var inputAsArray = inputString.split('');
var reverseArray = []
// reverse it 

for (var i = 0; i < inputAsArray.length; i++) {

	reverseArray[i] = inputAsArray[inputString.length - (1 + i)];

}

//join
var reverseString = reverseArray.join('');

console.log(reverseString);
