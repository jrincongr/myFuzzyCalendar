//moment().format('LLLL');
var currentDay = $("#currentDay");
//This is the same as saying document.getElementById("currentDay");´

//to change the text of the document element that we want to change we would use:¨
//With JS : currentDay.textContent = "whatever text we want"
// With "jquerry" :
currentDay.text(moment().format('LLLL'))

//Using the moment.js CDN in the HTML on the scripts section we can access the moment function to tell the time.
console.log(moment().format('LLLL'));