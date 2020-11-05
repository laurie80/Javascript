let imageManip = document.querySelector('img');

imageManip.onclick = function () {

	if (imageManip.src.match("coeur.jpg")) {
		imageManip.src = "assets/img/super-mario.jpg";
		imageManip.title = "Mario";
	} else {
        imageManip.src = "assets/img/coeur.jpg";
        imageManip.title = "Coeur";
	}
}

imageManip.onmouseover = function () {
	imageManip.style.width = "50rem";
}

imageManip.onmouseleave = function () {
	imageManip.style.width = "40rem";
}