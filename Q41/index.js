// define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array of magician names
var magicians = ['Harry Houdini', 'David Blaine', 'Teller'];
// call the show_magicians function with the array
show_magicians(magicians);
