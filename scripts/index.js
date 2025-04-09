var seconds = 0;
//var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds += 1;
    console.log = "You have been here for " + seconds + " seconds.";
}
var i=0;
while (i>1000){
    i++;
    incrementSeconds();
}
var cancel = setInterval(incrementSeconds, 1000);