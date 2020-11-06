let body = document.getElementById("container");

body.onscroll = function(e) {
    e.preventDefault();
    document.getElementById("container").style.fontSize = "2rem";
}
