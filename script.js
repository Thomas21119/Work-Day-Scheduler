var $currentDate = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text($currentDate);


const momentTime = moment().hours()
console.log(momentTime)
time = $('.time')

console.log(time[0])
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
    for (i = 0 ; i < time.length ; i++){
        if (momentTime < time[i]) {
            console.log(momentTime)
            console.log(time[i])
        $(this).addClass("past").removeClass("present", 'future');
    } else if (momentTime == time[i]) {
        console.log(momentTime)
        console.log(time[i])
        $(this).addClass("present").removeClass("past" , "future");
    } else {
        $(this).addClass("future").removeClass("past" , "present");
        console.log(momentTime)
        console.log(time[i])
    }
}
}

$(document).ready(function () {
    colorCoding();
});