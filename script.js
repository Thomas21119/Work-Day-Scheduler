var $currentDate = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text($currentDate);

const momentTime = moment().hours()
// const momentTime = 15

function colorCoding(){
    var taskInput =  $(".taskInput");
        taskInput.each(function(){
            var time = $(this).data('hour')
        if (momentTime > time) {
        $(this).addClass("past").removeClass("present", 'future');
    } else if (momentTime == time) {
        $(this).addClass("present").removeClass("past" , "future");
    } else {
        $(this).addClass("future").removeClass("past" , "present");
    
    }
})
}

var btnClick = $('.saveBtn')
btnClick.on("click", save);

function save() {
    var input = $('.taskInput')
    input.each(function() {
        input9 = $(this).data('hour')
        localStorage.setItem('input hour' + input9, this.value)
    })
}

function loadPage() {
    var input = $('.taskInput')
    input.each(function() {
        input9 = $(this).data('hour')
        this.value = localStorage.getItem('input hour' + input9)
    })
}

$(document).ready(function () {
    colorCoding();
    loadPage();
});

