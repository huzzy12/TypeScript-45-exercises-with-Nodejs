// define a function to create a car object with optional options
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // initialize the car object with the manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object
var my_car = create_car("Toyota", "Camry", "color:red", "transmission:automatic", "Year:2024");
// print the car object
console.log(my_car);
