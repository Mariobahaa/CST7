 function writeIc1() {
     getComputedStyle(document.getElementById("ic1")).left;
     document.getElementById("p1").innerText = "<img src= \"" + document.getElementById("ic1").getAttribute("src") +
         "\" left= " + getComputedStyle(document.getElementById("ic1")).left + "/>";
     document.getElementById("p1").style.color = "blue";
 }


 function writeIc2() {
     getComputedStyle(document.getElementById("ic2")).left;
     document.getElementById("p2").innerText = "<img src= \"" + document.getElementById("ic2").getAttribute("src") +
         "\" left= " + getComputedStyle(document.getElementById("ic2")).left + "/>";
     document.getElementById("p2").style.color = "blue";
 }


 writeIc1();
 writeIc2();

 /*getComputedStyle(document.getElementById("top")).left;
 document.getElementById("p3").innerText= "<img src= \"" + document.getElementById("top").src+
     "\" left= " + getComputedStyle(document.getElementById("top")).left +"/>";
 document.getElementById("p3").style.color = "blue";*/

 var moving = false;
 var im1stp = 10;
 var im2stp = 10;
 var im3stp = 10;
 var timer;


 document.getElementById("st").onclick = function () {
     if (!moving) {
         document.getElementById("st").value = "stop";
         moving = true;
         timer = setInterval(function () {

             var tp = parseInt(getComputedStyle(document.getElementById("top")).top)
             if ((tp >= 375 && im3stp > 0) || (tp <= 15 && im3stp < 0)) {
                 im3stp *= -1;
             }
             document.getElementById("top").style.top = (tp + im3stp) + "px";

             var i1 = parseInt(getComputedStyle(document.getElementById("ic1")).left)
             if ((i1 >= 370 && im1stp > 0) || (i1 <= 10 && im1stp < 0)) {
                 im1stp *= -1;
             }
             document.getElementById("ic1").style.left = (i1 + im1stp) + "px";

             var i2 = parseInt(getComputedStyle(document.getElementById("ic2")).left)
             if ((i2 >= 370 && im2stp > 0) || (i2 <= 10 && im2stp < 0)) {
                 im2stp *= -1;
             }
             document.getElementById("ic2").style.left = (i2 + im2stp) + "px";

             writeIc1();
             writeIc2();


         }, 100)


     } else {
         clearInterval(timer);
         moving = false;
         document.getElementById("st").value = "start";

     }
 }


 document.getElementById("rs").onclick = function () {
     if (moving) {
         clearInterval(timer);
         moving = false;
         document.getElementById("st").value = "start";
     }


     document.getElementById("top").style = document.styleSheets[0].cssRules.apply;
     document.getElementById("ic1").style = document.styleSheets[0].cssRules.apply;
     document.getElementById("ic2").style = document.styleSheets[0].cssRules.apply;

     writeIc1();
     writeIc2();
     //document.getElementById("ic1").classList.add("lb");
     //document.getElementById("ic2").classList.add("rb");

 }
