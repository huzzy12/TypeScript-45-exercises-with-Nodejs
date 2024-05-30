// creating a function with parameters that return a value with string
function describe_city(city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
} 

// calling a function
describe_city("Karachi");  
describe_city("Lahore");
describe_city("Berlin", "Germany");