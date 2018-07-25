let launch = document.querySelector(".launch")
let countdown = document.querySelector(".countdown")
let ovni = document.querySelector("#ovni")
let number = 10

launch.addEventListener(
    'click',
    function () {
        setInterval(decollage, 1000);
    }, false);

function animateClock(span) {
    span.className = "turn";
    setTimeout(function () {
        span.className = "";
    }, 700);
}

function decollage() {
    countdown.innerHTML = '<span>' + number + '</span>';

    var spans = countdown.getElementsByTagName("span");
    animateClock(spans[0]);
    if (number > 0) {
        countdown.innerHTML = (number -= 1)
        animateClock(spans[0])
    } else {
      countdown.innerHTML = 0
        ovni.style.transform = "translateY(-15000px)"
        ovni.style.transition = "all 15s"
    }
}