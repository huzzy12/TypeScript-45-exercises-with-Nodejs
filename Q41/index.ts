// define a function to print each magician name from an array

function show_magicians(magicians: string[]) {
  magicians.forEach(name => console.log(name));
}

// define an array of magician names
const magicians = ['Harry Houdini', 'David Blaine', 'Teller'];

// call the show_magicians function with the array
show_magicians(magicians);