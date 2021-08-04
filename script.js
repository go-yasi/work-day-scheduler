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

// save activity info to local storage
var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    var hour = $(this).parent().attr("id");
    var activity = $(this).siblings(".activity").val();
    localStorage.setItem(hour, activity);
});


// show saved activities
function displayActivities(){
    $("#9am .activity").val(localStorage.getItem("9am"))
    $("#10am .activity").val(localStorage.getItem("10am"))
    $("#11am .activity").val(localStorage.getItem("11am"))
    $("#12pm .activity").val(localStorage.getItem("12pm"))
    $("#1pm .activity").val(localStorage.getItem("1pm"))
    $("#2pm .activity").val(localStorage.getItem("2pm"))
    $("#3pm .activity").val(localStorage.getItem("3pm"))
    $("#4pm .activity").val(localStorage.getItem("4pm"))
    $("#5pm .activity").val(localStorage.getItem("5pm"))   
};

displayActivities();
