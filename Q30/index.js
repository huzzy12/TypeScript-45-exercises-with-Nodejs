// Creating an array
var userNames = ["Ali", "Asad", "Bilal", "Huzaifa", "Admin"];
// Using foreach loop to iterate through the array
userNames.forEach(function (userName) {
    if (userName === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for logging in again."));
    }
});
