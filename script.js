$(document).ready(function () {
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

var saveAllBtn = $('.saveAllBtn')
saveAllBtn.on('click', saveAll)

function saveAll () {
    var input = $('.taskInput')
    input.each(function() {
        input9 = $(this).data('hour');
        localStorage.setItem(input9, this.value);
    })
}

var clearAllBtn = $('.clearAllBtn')
clearAllBtn.on('click', clearAll)

function clearAll () {
    var input = $('.taskInput')
    input.each(function() {
        time = $(this).data('hour');
        localStorage.setItem(time, '');
        $(this).val('')
    })
}

var btnClick = $('.saveBtn')
btnClick.on("click", save);

function save() {
    var input = $(this).parent().siblings('.task').children('.taskInput').val();
    console.log(input)
    var time = $(this).data('btn');
    localStorage.setItem(time, input) 
}



function loadPage() {
    var input = $('.taskInput')
    input.each(function() {
        var time = $(this).data('hour');
        
        $(this).val(localStorage.getItem(time));
    })
}

    colorCoding();
    loadPage();
});

