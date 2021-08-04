var currentDay = moment();
var currentTime = moment().format("H");
$("#currentDay").text(currentDay.format("dddd, MMMM Do, YYYY"));

var plannerDiv = $(".container");
// var plannerRow = $("<div>");
// var hour = $("<div>");
// var activity = $("<div>");
// var saveBtn = $("<button>");

// plannerRow.addClass("row");

// plannerRow.text("test");

// plannerDiv.append(plannerRow);

// identify the current time so I can add the .present class to the current hour row



// if currentTime =  id add class .present
// for (var i = 9; i < 18; i++) {
//     if (currentTime === i) {
//         $(".hour").addClass(".present");
//     }
// };

if (currentTime < 9) {
    for(var i = 0; i < plannerDiv.children().length; i++){
        plannerDiv.children().eq(i).children().eq(1).addClass('future');
    }
} else if (currentTime > 17) {
    for(var i = 0; i < plannerDiv.children().length; i++){
        plannerDiv.children().eq(i).children().eq(1).addClass('past');
    }
} else {
    for(var i = 0; i < plannerDiv.children().length; i++){
        if (currentTime - 9 > i) {
            plannerDiv.children().eq(i).children().eq(1).addClass('past');
        } else if (currentTime - 9 == i) {
            plannerDiv.children().eq(i).children().eq(1).addClass('present');
        } else {
            plannerDiv.children().eq(i).children().eq(1).addClass('future');
        }
    }
}

// using jquery this to target what we need from each div and comparing it to moment
// if you need to add future class remember to remove present class
// what to do for local storage