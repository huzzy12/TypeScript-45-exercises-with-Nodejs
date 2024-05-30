// Creating an array
let userNames = ["Ali", "Asad", "Bilal", "Huzaifa", "Admin"];

// Using foreach loop to iterate through the array
userNames.forEach((userName) => {
  if (userName === "Admin") {
    console.log("Hello Admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${userName}, thank you for logging in again.`);
  }
});