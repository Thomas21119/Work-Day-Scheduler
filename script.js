var $currentDate = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text($currentDate);
var time = $('#time').text()


console.log(Number(moment().format("HH")))

time = $('.time')

// function test() {
// setInterval(function() {
//     if (Number(moment().format("HH"))<10) {
//     document.querySelector('body').setAttribute('style', 'background-color: red;')
//     console.log(Number($time.text()))
//     } else {
//         console.log('not working')
//     }

//     },1000);
// }

function colorCoding() {
    var taskInput =  $(".taskInput");
for (i = 0 ; i < time.length ; i++){
    var d = new Date();
    var n = d.getUTCHours() + 1;
    if (n < time.text()) {
        console.log(taskInput)
        // If time.text() is after 6PM or before 9AM, apply night theme to 'body'
        $(taskInput).addClass("past").removeClass("present", 'future');
    } else if (n = time.text()) {
        // Else use ‘day’ theme
        console.log(taskInput)
        $(taskInput).addClass("present").removeClass("past" , "future");
    } else if (n > time.text()){
        $(taskInput).addClass("future").removeClass("past" , "present");
        console.log(taskInput)
    }
}
}
$(document).ready(function () {
    colorCoding();
});

console.log("time length" + time.length)