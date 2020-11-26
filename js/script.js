$('.slider').slick({
    slidesToShow: 1,
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
});


var countDownDate = new Date("Sep 5, 2021 15:37:25").getTime();


var x = setInterval(function() {


    var now = new Date().getTime();


    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("demo").innerHTML = days + ": " + hours + ": " +
        minutes + ": " + seconds;


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


window.onload = function() {
    setTimeout(function() {
        modal.style.display = "block";
    }, 1950)

}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showThank() {
    thankWindow = document.getElementById('download_modal')
    emaiWindow = document.getElementById('myModal')
    thankWindow.style.display = "block";
    emaiWindow.style.display = "none";


}

function hideAll() {
    thankWindow = document.getElementById('download_modal');
    thankWindow.style.display = "none";
}
var thank = document.getElementById('thankID');
thank.addEventListener('click', showThank);

var good = document.getElementById('good');
good.addEventListener('click', hideAll);


function myFunction(x) {
    if (x.matches) {
        rwid = document.getElementById('rw');
        document.getElementById('rw').style.display = "block";
        document.getElementById('rw').style.marginBottom = "20px"
        document.getElementById('downl').style.display = "none";
        document.getElementById('hidden').style.display = "block"
    } else {
        document.getElementById('rw').style.display = "none";
        document.getElementById('hidden').style.display = "none";
    }
}

var x = window.matchMedia("(max-width: 575px)")
myFunction(x)
x.addListener(myFunction)