var currentDay = moment();
var currentTime = moment().format("H");
$("#currentDay").text(currentDay.format("dddd, MMMM Do, YYYY"));

var plannerDiv = $(".container");
var saveBtn = $(".saveBtn");
// var plannerRow = $("<div>");
// var hour = $("<div>");
// var activity = $("<div>");




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
