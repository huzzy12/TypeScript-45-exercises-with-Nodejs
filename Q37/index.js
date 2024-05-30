// Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and the message to be printed is ").concat(printMessage));
}
// Calling the function with default values
make_shirt();
// Calling the function with Medium size & default message
make_shirt("Medium");
// Calling the function with Small size & different message
make_shirt("Small", "I love JavaScript");
