// Creating a guest list array
var guestsList = ["Ali", "Hasan", "Hussain"];
// making variable for those guests who can't come
var notComing = guestsList[0];
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
var middleIndex = Math.floor(guestsList.length / 2);
// adding a new guest at the middle index of the array
guestsList.splice(middleIndex, 0, "Aisha");
// Print message of updated list
console.log("Updated guests list");
// sending an invitation message to our guests one by one
guestsList.forEach(function (guest) {
    return console.log("Salam ".concat(guest, ", \"Would you like to dinner with me?"));
});
// Informing that only two guests can come to dinner
console.log("Unfortunately the new dinner table won't arrive in time, so I can invite only two guests to dinner with me");
// Using while loop to remove guests from the array until only 2 names remain
while (guestsList.length > 2) {
    var removedGuests = guestsList.pop();
    console.log("Sorry, ".concat(removedGuests, " I can't invite you to dinner"));
}
// Printing updated list
console.log("Invitations to the remaining two guests");
// Sending invitations to remaining two guests
guestsList.forEach(function (lasttwo) {
    return console.log("Luckily ".concat(lasttwo, ", \"you are still invited to dinner with me\""));
});
// Removing the last two guests from the array
guestsList.pop();
guestsList.pop();
console.log("Empty list:", guestsList);
