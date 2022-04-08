//display current date 

var textAreaEl = $('#input');
var hourEL = $('#hour');
var saveBtnEl = $('saveBtn');

 var todayDate = moment();
 $('#currentDay').text(todayDate.format('dddd, MMMM Do'));


 function saveSchedule() {
    console.log("im linked!")
};

saveBtnEl.click(saveSchedule())

//figure out if in past present of future
    //comapare slot time to current time if >=< 
    //change textbox color past to red
    //change textbox color current to light blue
    //change textbox color future to light green


var schedTime = moment().format('HH');
console.log(schedTime)
