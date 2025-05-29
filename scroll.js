document.getElementById("body").onscroll = function myFunction() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("text-01");
    var xvalue = "sticky";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    var wa = 20;
    target.style.position = xvalue;
    target.style.top = yvalue + "px";
  }