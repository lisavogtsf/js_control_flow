var data = require("./products.json")

// Write your solutions below

// console.log(data["items"]);
// where data is an object and "items" is a key inside the data object.
// data["items"] uses the "items" key to access the value of "items", which is 
// a complex object itself
console.log("-------------------");
console.log("Google Shopping #1");
// 1.) The kind of results you're are dealing are shopping#products. 
// Go through the items and find all results that have kind of shopping#product. 
// How many are there? Where else is this count information stored 
// in the search results?

// kind is a key, paired with shopping#product

console.log(data["items"].length);

var count = 0;

for (var i = 0; i < data["items"].length; i++) {
	if (data["items"][i]["kind"] === "shopping#product") {
		count++
	}
}
console.log("Count of items that are kind: shopping#product = " + count);

// This information is also available in 
// "itemsPerPage": 25,
// "currentItemCount": 25,
// although that doesn't validate whether an item is kind: shopping#product explicitly

console.log("-------------------");
console.log("Google Shopping #2");
// 2.) Find all items with a backorder availability in inventories.

for (var i = 0; i < data["items"].length; i++) {
	if (data["items"][i]["inventories"] === "backorder") {
		console.log("hooray, backorder");
		console.log(data["items"][i]["title"]);
	}
}


























