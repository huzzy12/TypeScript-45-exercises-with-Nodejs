// creating a function with parameters which return a value in string

function city_country(city: string, country: string) : string {
    return `${city}, ${country}`;
}

// calling a function & print returned value
console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("London", "UK"));
