// define a function to show the names of the magicians in the array
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// define an array of magician names
var magician_names = ['David Copperfield', 'Penn Jillette', 'Teller'];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
