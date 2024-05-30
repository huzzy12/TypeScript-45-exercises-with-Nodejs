// Creating a guest list array

let guestsList = ["Ali", "Hasan", "Hussain"];

// making variable for those guests who can't come
let notComing = guestsList[0];

// print the name of guests not coming
console.log(notComing, "Can't come");

// add or remove values from guestslist array
guestsList.splice(0, 1, "Fatima");

// message print for bigger table
console.log("Good news! We have found a bigger table for dinner.");

// adding a new guest at the starting index of the array
guestsList.unshift("Zain");

// adding a new guest at the ending index of the array
guestsList.push("Sana");

// get a middle index of our array
let middleIndex: number = Math.floor(guestsList.length / 2);

// adding a new guest at the middle index of the array
guestsList.splice(middleIndex, 0, "Aisha");

// Print message of updated list
console.log("Updated guests list");

// sending an invitation message to our guests one by one
guestsList.forEach((guest) =>
  console.log(`Salam ${guest}, "Would you like to dinner with me?`)
);