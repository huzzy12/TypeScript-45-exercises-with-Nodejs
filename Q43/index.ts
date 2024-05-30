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
    
    // making a copy of the array
    let magician_names_copy = magician_names.slice()

    // modify the array to include "The Great"
    let copy_great_magicians = make_great(magician_names_copy);

// show both arrays, original & copied

console.log("Original Array\n");
show_magicians(magician_names);
  
console.log("\nCopy of Array\n");
show_magicians(copy_great_magicians);


