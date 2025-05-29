var i = 0
var hurr = document.getElementsByClassName('fl-Left');
const div = document.getElementById("hurrdurr");
let colhurr = document.getElementById("anim-hurr").style.color;
let coldurr = document.getElementById("anim-durr").style.color;
let state = 0;

function textanim() {
    if (state == 1) {
        document.getElementById("anim-hurr").style.color = "rgb(255, 80, 80)";
        document.getElementById("anim-durr").style.color = "rgb(240, 248, 255)";
        state = 0;
    } else {
        document.getElementById("anim-hurr").style.color = "rgb(240, 248, 255)";
        document.getElementById("anim-durr").style.color = "rgb(235, 235, 0)";
        state = 1;
    }
}

for (var i = 0; i < 1; i++) {

    setInterval(textanim,800);

}