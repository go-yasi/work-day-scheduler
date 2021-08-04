var currentDay = moment();
var currentTime = moment().format("H");
$("#currentDay").text(currentDay.format("dddd, MMMM Do, YYYY"));

var plannerDiv = $(".container");

// var plannerRow = $("<div>");
// var hour = $("<div>");
// var activity = $("<div>");

// add past/present/future class to div based on current time
if (currentTime < 9) {
    for(var i = 0; i < plannerDiv.children().length; i++){
        plannerDiv.children().eq(i).children().eq(1).addClass("future");
    }
} else if (currentTime > 17) {
    for(var i = 0; i < plannerDiv.children().length; i++){
        plannerDiv.children().eq(i).children().eq(1).addClass("past");
    }
} else {
    for(var i = 0; i < plannerDiv.children().length; i++){
        if (currentTime - 9 > i) {
            plannerDiv.children().eq(i).children().eq(1).addClass("past");
        } else if (currentTime - 9 == i) {
            plannerDiv.children().eq(i).children().eq(1).addClass("present");
        } else {
            plannerDiv.children().eq(i).children().eq(1).addClass("future");
        }
    }
}

// save activity info
var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    var activity = $(this).siblings(".activity").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(activity, hour);
});