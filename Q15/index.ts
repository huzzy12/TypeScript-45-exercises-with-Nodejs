let guestsList = ["Ali", "Hasan", "Hussain"];

let notComing = guestsList[0];

console.log(notComing, "nahi aa skta");

guestsList.splice(0, 1, "Fatima");

guestsList.forEach((guest) =>
  console.log(`Salam, ${guest}, would you like to dinner with me?`)
);
