let CDDate = new Date("March 20, 2020 00:00:00").getTime();

console.log("CDDate = " + CDDate);

let x = setInterval(function() {
    let now = new Date().getTime();
    console.log("now = " + now);

    //calculate time left
    let distance = CDDate - now;
    console.log("distance = " + distance);

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (distance < 0) {
        clearInterval(x);
        doxument.getElementById("timer").innerHTML = "Should be out today!";
    }
}, 1000);