// when page is loaded run functions at bottom of page
$(document).ready(function () {
// date time 
var $currentDate = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text($currentDate);

// sets a constant variable of the hour
const momentTime = moment().hours()

// color codes based on time
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

// on click of saveall button save everything inputed to local storage
var saveAllBtn = $('.saveAllBtn')
saveAllBtn.on('click', saveAll)

function saveAll () {
    var input = $('.taskInput')
    input.each(function() {
        input9 = $(this).data('hour');
        localStorage.setItem(input9, this.value);
    })
}

// on click of clear all button everything is cleared from local storage and all inputs are cleared from current page
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

// save each input individually
var btnClick = $('.saveBtn')
btnClick.on("click", save);

function save() {
    var input = $(this).parent().siblings('.task').children('.taskInput').val();
    console.log(input)
    var time = $(this).data('btn');
    localStorage.setItem(time, input) 
}


// loads all previously saved inputs into page 
function loadPage() {
    var input = $('.taskInput')
    input.each(function() {
        var time = $(this).data('hour');
        
        $(this).val(localStorage.getItem(time));
    })
}
    // when page loads run these functions
    colorCoding();
    loadPage();
});

