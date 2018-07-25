let launch = document.querySelector(".launch")
let countdown = document.querySelector(".countdown")
let ovni = document.querySelector("#ovni")
let number = 10

launch.addEventListener(
    'click',
    function () {
        setInterval(decollage, 1000);
    }, false);

    countdown.innerHTML = '<span>' + number + '</span>';

function decollage() {
    if (number > 0) {
        countdown.innerHTML = (number -= 1)
    } else {
      countdown.innerHTML = 0
        ovni.style.transform = "translateY(-15000px)"
        ovni.style.transition = "all 15s"
        interrogation.style.transform = "translateY(-15000px)"
        interrogation.style.transition = "all 15s"
    }
}