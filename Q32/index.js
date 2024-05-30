// Current users array
var current_users = ["Ali", "Asad", "Bilal", "Huzaifa", "Zara"];
// New users array
var new_users = ["Ammar", "Taha", "Fatima", "Huzaifa", "Zara"];
// loop through new users array
new_users.forEach(function (new_one_user) {
    // check if user exists in current users array
    var our_condition = current_users.some(function (current_one_suser) { return current_one_suser.toLowerCase() === new_one_user.toLowerCase(); });
    // print different messages based on our condition
    if (our_condition) {
        console.log("Sorry, the username \"".concat(new_one_user, "\" is already taken."));
    }
    else {
        console.log("The username \"".concat(new_one_user, "\" is available."));
    }
});
