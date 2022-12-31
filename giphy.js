// API key for giphy
// DfUFuYIRivnvWT1rwr0FyxCf73KIw0Im

const $gifSpot = $("#gifsGoHere");
//Making the gifs
async function makeGif(kw) {
	// document.getElementById("btn").addEventListener("click", ev => {
	let apikey = "DfUFuYIRivnvWT1rwr0FyxCf73KIw0Im";
	let url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&limit=1&q=${kw}`;
	let str = document.getElementById("kw").value.trim();
	// url = url.concat(str);
	console.log(url);
	console.log("Let's get this party started!");

	//
	const res = await axios.get(url);
	console.log(res);
	// const gif = document.querySelector("#gif");
	// gif.src = res.data.data[0].images.original.url;

	let $newbox = $("<div>");
	let $newGif = $("<img>", {
		src: res.data.data[0].images.original.url,
		class: "w-75",
	});

	$newbox.append($newGif);
	$gifSpot.append($newbox);
	// })
}

//handling the form submission
const form = document.querySelector("#searchform");
const input = document.querySelector("#kw");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	makeGif(input.value);
	input.value = "";
	console.log(input.value);
});

//Delete gifs
$("#delete").on("click", function () {
	$gifSpot.empty();
});
///////////////////////////////////////////////////////////////////////////////
