/* Initialize Counter */

var counter = 1;

/* Add click event handler to individual fade boxes */

var boxes = document.getElementsByClassName("fadebox");

for (var i = 0; i < boxes.length; i++) {

    boxes[i].onclick = function () {
        this.classList.add('invisible');
    }

}

function showFadeBoxes() {

    var boxes = document.getElementsByClassName("fadebox");

    for (var i = 0; i < boxes.length; i++) {

        boxes[i].classList.remove('invisible');

    }

}

/* Change the "labeltest" element text and color */

function changeLabel() {

    /* Change the Element Text */

    document.getElementById("labeltest").style.background = "red";
    document.getElementById("labeltest").style.color = "White";
 
    /* Change the Element Style */

    document.getElementById("labeltest").style.fontFamily ="Times New Roman";

}

/* Increment counter; display new value in "countertest" element */

function incrementCounter() {

    /* Increment the Counter */

     document.getElementById("countertest").innerHTML = "JavaScript Counter:" + " " + counter++;
     
    
    /* Update the Counter Display */

    
    
}