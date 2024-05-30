// define a function with rest parameter that accepts items arguments making our sandwich

function makeSandwich(...items: string[]){
console.log("\nMaking a sandwich with the following items: \n");

items.forEach(singleItem => console.log(singleItem));

console.log("\nNow enjoy your sandwich");
}

// call the function 3 times with 3 different arguments
makeSandwich("cheese", "tomato", "lettuce", "mayo");

makeSandwich("butter", "cheese", "mustard");

makeSandwich("bread", "cheese", "lettuce", "tomato", "chicken", "bbq sauce");

