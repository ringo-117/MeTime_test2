
// 　MOVIE
document.querySelectorAll(".modal_open_movie").forEach
((video) => {
	video.onclick = () => {
		document.querySelector(".modal_movie").style.
		display = "block";
		document.querySelector(".modal_movie iframe").style.
		display = "block";
		document.querySelector(".modal_movie iframe").play();
	}
});
const span = (document.querySelector(".modal_movie span").onclick = () => {
	document.querySelector(".modal_movie").style.
	display = "none";
	document.querySelector(".modal_movie iframe").style.
	display = "none";
	document.querySelector(".modal_movie iframe").style.
	autoplay = "0";
	document.querySelector(".modal_movie iframe").pause();
});
const div = (document.querySelector(".modal_movie div").onclick = () => {
	document.querySelector(".modal_movie").style.
	display = "none";
	document.querySelector(".modal_movie iframe").style.
	display = "none";
	document.querySelector(".modal_movie iframe").style.
	autoplay = "0";
	document.querySelector(".modal_movie iframe").pause();
});

