// define a function with rest parameter that accepts items arguments making our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy your sandwich");
}
// call the function 3 times with 3 different arguments
makeSandwich("cheese", "tomato", "lettuce", "mayo");
makeSandwich("butter", "cheese", "mustard");
makeSandwich("bread", "cheese", "lettuce", "tomato", "chicken", "bbq sauce");
