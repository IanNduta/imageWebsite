"use strict";
//buttons
const submitBtn = document.getElementById("submitBtn");
const submitBtn2 = document.getElementById("submitBtn2");
const submitBtn3 = document.getElementById("submitBtn3");

window.onload = function(){
    console.log("hi");
    submitBtn.onclick = onClickedSubmitBtn;
    submitBtn2.onclick = onClickedSumbitBtn2;
    submitBtn3.onclick = onClickedSubmitBtn3;
}

function onClickedSubmitBtn(){
    window.open("https://www.google.com/", "_blank");
    console.log("hi");
}
function onClickedSumbitBtn2(){
    window.open("https://www.w3schools.com/", "_blank");

}
function onClickedSubmitBtn3(){
    window.open("images.html", "_blank");
}
onClickedSubmitBtn();