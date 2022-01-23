function redColor () {
               document.body.style.backgroundColor = "red";
}
function orangeColor () {
               document.body.style.backgroundColor = "orange";
               document.body.style.color = "white"
}

// handle green button click by setting function namemake-green-button
function greenColor () {
               document.body.style.backgroundColor = "green";
}

const greenClr = document.getElementById('make-green-button');
// just set the name function name
greenClr.onclick = greenColor();