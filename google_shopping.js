var data = require("./products.json")

// Write your solutions below

// console.log(data["items"]);
// where data is an object and "items" is a key inside the data object.
// data["items"] uses the "items" key to access the value of "items", which is 
// a complex object itself
console.log("-------------------");
console.log("Google Shopping #1");
console.log("-------------------");
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
console.log("\n");
console.log("-------------------");
console.log("Google Shopping #2");
console.log("-------------------");
// 2.) Find all items with a backorder availability in inventories.
var backorder = [];
var backorderCount = 0;

for (var i = 0; i < data["items"].length; i++) {
	if (data["items"][i]["product"]["inventories"][0]["availability"] === "backorder") {
		backorderCount++;
		backorder.push(data["items"][i]);
		console.log(backorderCount + "). \t" + data["items"][i]["product"]["title"]);
	}
}
console.log("A total of " + backorderCount + " items on backorder");

console.log("\n");
console.log("-------------------");
console.log("Google Shopping #3");
console.log("-------------------");

// 3.) Find all items with more than one image link.

var multiImage = [];
var multiImageCount = 0;


for (var i = 0; i < data["items"].length; i++) {
	if (data["items"][i]["product"]["images"].length > 1) {
		multiImageCount++;
		multiImage.push(data["items"][i]["product"]["images"]);
		console.log(multiImageCount + "). \t" + data["items"][i]["product"]["title"]);
	}
}
console.log("A total of " + multiImageCount + " items have more than one image link");

console.log("\n");
console.log("-------------------");
console.log("Google Shopping #4");
console.log("-------------------");
//4.) Find all canon products in the items (careful with case sensitivity).

var canonProd = [];
var canonProdCount = 0;

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

for (var i = 0; i < data["items"].length; i++) {
	if (toTitleCase(data["items"][i]["product"]["brand"]) === "Canon") {
		canonProdCount++;
		canonProd.push(data["items"][i]["product"]["title"]);
		console.log(canonProdCount + "). \t" + data["items"][i]["product"]["title"]);
	}
}
console.log("A total of " + canonProdCount + " items");


console.log("\n");
console.log("-------------------");
console.log("Google Shopping #5");
console.log("-------------------");
// 5.) Find all items that have product author name of "eBay" and are brand "Canon".

var eBayCanonProd = [];
var eBayCanonProdCount = 0;

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


for (var i = 0; i < data["items"].length; i++) {
	if (toTitleCase(data["items"][i]["product"]["brand"]) === "Canon" && toTitleCase(data["items"][i]["product"]["author"]["name"]) === "Ebay" ) {

		eBayCanonProdCount++;
		eBayCanonProd.push(data["items"][i]["product"]["title"]);
		console.log(eBayCanonProdCount + "). \t" + data["items"][i]["product"]["title"]);
	}
}
console.log("A total of " + eBayCanonProdCount + " items from Canon and by an eBay seller");

console.log("\n");
console.log("-------------------");
console.log("Google Shopping #6");
console.log("-------------------");

// 6.) Print all the products with their brand, price, and a image link


for (var i = 0; i < data["items"].length; i++) {
	console.log(data["items"][i]["product"]["title"]);
	console.log("\t" + data["items"][i]["product"]["brand"]);
	console.log("\t" + "$" + data["items"][i]["product"]["inventories"][0]["price"]);
	console.log("\t" + data["items"][i]["product"]["images"][0]["link"]);
	console.log("\n")
}













