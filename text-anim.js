var i = 0
var hurr = document.getElementsByClassName('fl-Left');
const div = document.getElementById("hurrdurr");
let colhurr = document.getElementById("anim-hurr").style.color;
let coldurr = document.getElementById("anim-durr").style.color;

function textanim() {
    if (colhurr == "rgb(240, 248, 255)") {
        document.getElementById("anim-hurr").style.color = 'rgb(255, 80, 80)'
        document.getElementById("anim-durr").style.color = 'rgb(240, 248, 255)'
    }
    else {
        document.getElementById("anim-hurr").style.color = 'rgb(240, 248, 255)'
        document.getElementById("anim-durr").style.color = 'rgb(235, 235, 0)'
    }
}

setInterval(textanim,1000);
