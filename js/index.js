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


// four approach-- handle evnet using anonymous function
const aquaColor = document.getElementById('make-aqua-button');
aquaColor.onclick = function () {
               document.body.style.backgroundColor = "aqua";
}
// five approach
const lightblue = document.getElementById('make-lightBlue');
lightblue.addEventListener('click', lightBlue());

function lightBlue () {
               document.body.style.backgroundColor = "lightBlue"
}



// six approach:--add event listener with function
const goldenrod = document.getElementById('make-goldenrod');
goldenrod.addEventListener('click', function() {
               document.body.style.backgroundColor = "goldenrod"
})


document.getElementById('make-red-btn').addEventListener('click', function(){
               document.body.style.backgroundColor = "red";
})