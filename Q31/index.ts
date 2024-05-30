let userNames = ["Ali", "Asad", "Huzaifa", "Bilal", "Admin"];

userNames = []

if(userNames.length === 0){
console.log("Your array is empty, we need to find some users!");
}
else{
    userNames.forEach(element => {
        if(element === "Admin"){
            console.log("Hello Admin, would you like to see a status report?");
        }
        else{
            console.log("Hello " + element + ", thank you for logging in again!");
        }
    })
}