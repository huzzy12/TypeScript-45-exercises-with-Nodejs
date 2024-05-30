var guestsList = ["Ali", "Hasan", "Hussain"];
var notComing = guestsList[0];
console.log(notComing, "nahi aa skta");
guestsList.splice(0, 1, "Fatima");
guestsList.forEach(function (guest) {
    return console.log("Salam, ".concat(guest, ", would you like to dinner with me?"));
});
