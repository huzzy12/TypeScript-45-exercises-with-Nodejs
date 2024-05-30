// Making a function
function make_shirt (size: string = "Large", printMessage: string = "I love TypeScript") {
    
    console.log(`The shirt size is ${size} and the message to be printed is ${printMessage}`);
}

// Calling the function with default values
make_shirt();

// Calling the function with Medium size & default message
make_shirt("Medium");

// Calling the function with Small size & different message
make_shirt("Small", "I love JavaScript");