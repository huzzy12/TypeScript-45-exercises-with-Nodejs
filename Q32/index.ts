// Current users array
let current_users = ["Ali", "Asad", "Bilal", "Huzaifa", "Zara"];

// New users array
let new_users = ["Ammar", "Taha", "Fatima", "Huzaifa", "Zara"];

// loop through new users array
new_users.forEach((new_one_user) => {

  // check if user exists in current users array
  let our_condition = current_users.some(
    current_one_suser => current_one_suser.toLowerCase() ===  new_one_user.toLowerCase()
  )

  // print different messages based on our condition
  if (our_condition){
    console.log(`Sorry, the username "${new_one_user}" is already taken.`);
  } else {
    console.log(`The username "${new_one_user}" is available.`);
  }
});
