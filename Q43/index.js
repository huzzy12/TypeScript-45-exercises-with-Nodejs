// define a function to show the names of the magicians in the array
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// define a function to make the magicians great
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// define an array of magician names
var magician_names = ['David Copperfield', 'Penn Jillette', 'Teller'];
// making a copy of the array
var magician_names_copy = magician_names.slice();
// modify the array to include "The Great"
var copy_great_magicians = make_great(magician_names_copy);
// show both arrays, original & copied
console.log("Original Array\n");
show_magicians(magician_names);
console.log("\nCopy of Array\n");
show_magicians(copy_great_magicians);
