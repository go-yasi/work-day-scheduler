var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));

console.log(currentDay);

// var plannerDiv = $(".container");
// var plannerRow = $("<div>");
// var hour = $("<div>");
// var activity = $("<div>");
// var saveBtn = $("<button>");

// plannerRow.addClass("row");

// plannerRow.text("test");

// plannerDiv.append(plannerRow);

// identify the current time so I can add the .present class to the current hour row
var currentTime = moment().format("h");
console.log(currentTime);

// if currentTime =  id add class .present
for (var i = 9; i < 18; i++) {
    if (currentTime === i) {
        $(".hour").addClass(".present");
    }
};

// using jquery this to target what we need from each div and comparing it to moment
// if you need to add future class remember to remove present class
// what to do for local storage