var text = [
    "1. BEING ON TIME",
    "2. WORK ETHIC",
    "3. EFFORT",
    "4. BODY LANGUAGE",
    "5. ENERGY",
    "6. ATTITUDE",
    "7. PASSION",
    "8. BEING COACHABLE",
    "9. DOING EXTRA",
    "10. BEING PREPARED"
];

var random_text = text[Math.floor(Math.random() * text.length)];

window.onload = function () {

	letsgo();

	function letsgo() {
		document.getElementById("script_output").innerHTML = random_text;
	};

}