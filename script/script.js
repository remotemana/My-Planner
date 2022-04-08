//display current date 

 var todayDate = moment();
 $('#currentDay').text(todayDate.format('dddd, MMMM Do'));
 
//figure out if in past present of future
    //comapare slot time to current time if >=< 
    //change textbox color past
    //change textbox color current 
    //change textbox color future 





// =========================================================
var schedTime = moment().toArray();
var textAreaEl9 = document.getElementById("task-input9");
var textAreaEl10 = document.getElementById("task-input10");
var textAreaEl11 = document.getElementById("task-input11");
var textAreaEl12 = document.getElementById("task-input12");
var textAreaEl13 = document.getElementById("task-input13");
var textAreaEl14 = document.getElementById("task-input14");
var textAreaEl15 = document.getElementById("task-input15");
var textAreaEl16 = document.getElementById("task-input16");
var textAreaEl17 = document.getElementById("task-input17");


if (09 < schedTime[3]) {
    textAreaEl9.classList.add("past")
}

if (09 === schedTime[3]) {
    textAreaEl9.classList.add("present")
}

if (09 > schedTime[3]) {
    textAreaEl9.classList.add("future")
}

//=============================================================
if (10 < schedTime[3]) {
    textAreaEl10.classList.add("past")
}

if (10 === schedTime[3]) {
    textAreaEl10.classList.add("present")
}

if (10 > schedTime[3]) {
    textAreaEl10.classList.add("future")
}
//=============================================================
if (11 < schedTime[3]) {
    textAreaEl11.classList.add("past")
}

if (11 === schedTime[3]) {
    textAreaEl11.classList.add("present")
}

if (11 > schedTime[3]) {
    textAreaEl11.classList.add("future")
}
//=============================================================
if (12 < schedTime[3]) {
    textAreaEl12.classList.add("past")
}

if (12 === schedTime[3]) {
    textAreaEl12.classList.add("present")
}

if (12 > schedTime[3]) {
    textAreaEl12.classList.add("future")
}
//=============================================================
if (13 < schedTime[3]) {
    textAreaEl13.classList.add("past")
}

if (13 === schedTime[3]) {
    textAreaEl13.classList.add("present")
}

if (13 > schedTime[3]) {
    textAreaEl13.classList.add("future")
}
//=============================================================
if (14 < schedTime[3]) {
    textAreaEl14.classList.add("past")
}

if (14 === schedTime[3]) {
    textAreaEl14.classList.add("present")
}

if (14 > schedTime[3]) {
    textAreaEl14.classList.add("future")
}
//=============================================================
if (15 < schedTime[3]) {
    textAreaEl15.classList.add("past")
}

if (15 === schedTime[3]) {
    textAreaEl15.classList.add("present")
}

if (15 > schedTime[3]) {
    textAreaEl15.classList.add("future")
}
//=============================================================
if (16  < schedTime[3]) {
    textAreaEl16.classList.add("past")
}

if (16 === schedTime[3]) {
    textAreaEl16.classList.add("present")
}

if (16 > schedTime[3]) {
    textAreaEl16.classList.add("future")
}
//=============================================================
if (17 < schedTime[3]) {
    textAreaEl17.classList.add("past")
}

if (17 === schedTime[3]) {
    textAreaEl17.classList.add("present")
}

if (17 > schedTime[3]) {
    textAreaEl17.classList.add("future")
}
//=============================================================

var saveBtnEl9 = $("#saveBtn9")
var saveBtnEl10 = $("#saveBtn10")
var saveBtnEl11 = $("#saveBtn11")
var saveBtnEl12 = $("#saveBtn12")
var saveBtnEl13 = $("#saveBtn13")
var saveBtnEl14 = $("#saveBtn14")
var saveBtnEl15 = $("#saveBtn15")
var saveBtnEl16 = $("#saveBtn16")
var saveBtnEl17 = $("#saveBtn17")

var textarea9 = $("#input9")
var textarea10 = $("#input10")
var textarea11 = $("#input11")
var textarea12 = $("#input12")
var textarea13 = $("#input13")
var textarea14 = $("#input14")
var textarea15 = $("#input15")
var textarea16 = $("#input16")
var textarea17 = $("#input17")

//=============================================================
saveBtnEl9.click(function() {
    localStorage.setItem("timeblock", textarea9.val())
    console.log("im linked")
});
//=============================================================
saveBtnEl10.click(function() {
    localStorage.setItem("timeblock", textarea10.val())
    console.log("im linked")
});
//=============================================================
saveBtnEl11.click(function() {
    localStorage.setItem("timeblock", textarea11.val())
    console.log("im linked")
});
//=============================================================
saveBtnEl12.click(function() {
    localStorage.setItem("timeblock", textarea12.val())
    console.log("im linked")
});
//=============================================================
saveBtnEl13.click(function() {
    localStorage.setItem("timeblock", textarea13.val())
    console.log("im linked")
});
//=============================================================
saveBtnEl14.click(function() {
    localStorage.setItem("timeblock", textarea14.val())
    console.log("im linked")
});
//=============================================================
saveBtnEl15.click(function() {
    localStorage.setItem("timeblock", textarea15.val())
    console.log("im linked")
});
//=============================================================
saveBtnEl16.click(function() {
    localStorage.setItem("timeblock", textarea16.val())
    console.log("im linked")
});
//=============================================================
saveBtnEl17.click(function() {
    localStorage.setItem("timeblock", textarea17.val())
    console.log("im linked")
});
//=============================================================


