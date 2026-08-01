let dinodoomz = null
let dinodoomzYes = document.getElementById("dinodoomz-yes")
let dinodoomzNo = document.getElementById("dinodoomz-no")
let dinodoomzAnswer = document.getElementById("dinodoomz-answer")

let finishBtn = document.getElementById("finish-btn")
let ifNotPressedText = document.getElementById("if-not-pressed-text")

dinodoomzYes.addEventListener("click", function() {
    dinodoomz = true
    dinodoomzAnswer.textContent = "Yes"
});

dinodoomzNo.addEventListener("click", function() {
    dinodoomz = false
    dinodoomzAnswer.textContent = "No"
});

finishBtn.addEventListener("click", function() {
    if (dinodoomz == true) {
        location.href = "isDino.html";
    }
    else if (dinodoomz == false) {
        location.href = "isNotDino.html";
    }
    else {
        ifNotPressedText.textContent = "bro u have to like... answer...";
    }
});

let supportDinoBtn = document.getElementById("supportDinoBtn")
supportDinoBtn.addEventListener("click", function() {
    location.href = "https://www.youtube.com/@dinodoomz?sub_confirmation=1";
});
