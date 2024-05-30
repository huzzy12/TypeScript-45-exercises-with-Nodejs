// define a function to show the names of the magicians in the array

function show_magicians(magicians: string[]){
magicians.forEach(magician => {
    console.log(magician);
});
}

// define a function to make the magicians great

function make_great(magicians: string[]){
return magicians.map(magician => `the Great ${magician}`);
}

// define an array of magician names
let magician_names = ['David Copperfield', 'Penn Jillette', 'Teller'];

// call the function to show the magicians
let great_magicians = make_great(magician_names);

// call the function to show the modified list of magicians
show_magicians(great_magicians);
