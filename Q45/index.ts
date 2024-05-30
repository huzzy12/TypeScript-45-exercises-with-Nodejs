// define a function to create a car object with optional options

function create_car(manufacturer, model, ...options){

    // initialize the car object with the manufacturer and model
    let car = {
        manufacturer: manufacturer, 
        model: model
    };

    // add additional options to the car object
    options.forEach(option => {
       let[key, value] = option.split(":");
       car[key.trim()] = value.trim();
    });
    return car;
}

// call the function to create a car object
let my_car = create_car("Toyota", "Camry", "color:red", "transmission:automatic", "Year:2024");

// print the car object
console.log(my_car);