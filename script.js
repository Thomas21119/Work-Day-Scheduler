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

function colorCoding(){
    var taskInput =  $(".taskInput");
    taskInput.each(function() {
    // for (i = 0 ; i < time.length ; i++){
        var n = Number(moment().format('HH'))
        if (n < Number(time.text())) {
        console.log("if " + Number(time.text()))
        $(this).addClass("past").removeClass("present", 'future');
    } else if (n = Number(time.text())) {
        console.log("if else" + this)
        $(this).addClass("present").removeClass("past" , "future");
    } else if (n > Number(time.text())){
        $(this).addClass("future").removeClass("past" , "present");
        console.log("else" + this)
    }
})
}

$(document).ready(function () {
    colorCoding();
});

console.log("time length" + time.length)

var d = new Date();
        var n = Number(moment().format('HH'))
        console.log(n + "test" + typeof n)
        console.log(Number(time.text()))