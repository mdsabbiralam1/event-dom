// using functiion
function justF () {
               // document.body.style.backgroundColor = 'red';
               const clickmethod = document.getElementById('click-mathod');
               clickmethod.innerText = "set by only function method";
               document.body.style.backgroundColor = "red"
               document.body.style.backgroundColor = "yellow"
               document.body.style.color = "white"
}

// direct 
document.getElementById('direct-event').addEventListener('click', function() {
               document.body.style.backgroundColor = "yellow"
})

// direct
document.getElementById('submit').addEventListener('click', function() {
               const input = document.getElementById('input-name');
               console.log(input.value)
               
})