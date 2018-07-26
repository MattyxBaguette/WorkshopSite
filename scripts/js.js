let launch = document.querySelector(".launch")
let countdown = document.querySelector(".countdown")
let ovni = document.querySelector("#ovni")
let number = 10

launch.addEventListener(
    'click',
    function () {
        setInterval(decollage, 1000);
    }, false);

/*function animateClock(span) {
    let i = true;
    setInterval(function () {
       if (i === true) {
           span.classList.add("turn")
           i = false;
       }
       if (i === false) {
           span.classList.add("")
           i = true;
       }
    }, 700);
}*/

function decollage() {
    countdown.innerHTML = '<span>' + number + '</span>';

/*    var spans = document.querySelector(".countdown span");
    animateClock(spans);*/
    if (number > 0) {
        countdown.innerHTML = (number -= 1)
//        animateClock(spans)
    } else {
      countdown.innerHTML = 0
        ovni.style.transform = "translateY(-15000px)"
        ovni.style.transition = "all 15s"
//        countdown.style.textAlign = "center"
    }
}