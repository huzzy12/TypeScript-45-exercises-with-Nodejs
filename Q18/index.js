// Making an array of countries and printing it in original order
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriestoVisit = ["Finland", "Russia", "Morocco", "NewZealand", "Dubai"];
console.log("Original order:", countriestoVisit);
// Printing the array in alphabetical order without modifying the original array
console.log("Alphabatical order:", __spreadArray([], countriestoVisit, true).sort());
// Show that the array is still in its original order by printing it again
console.log("Still in original order:", countriestoVisit);
// Printing the array in reverse alphabetical order without modifying the original array
console.log("Reverse order:", __spreadArray([], countriestoVisit, true).reverse());
// Show that the array is still in its original order by printing it again
console.log("Still in original order:", countriestoVisit);
// We have chnaged the original array order by reversing it
console.log("Original Array Reversed", countriestoVisit.reverse());
// Print the array to show its back to its original order
console.log("Back to Original Order", countriestoVisit.reverse());
// Print the array to show its order has been changed in alphabetical order
console.log("Sorted in Alphabetical Order", countriestoVisit.sort());
// We have chnaged the original array order by reversing it again
console.log("Original Array Reversed Again", countriestoVisit.reverse());
