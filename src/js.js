function myFunction() {
	copy(code)
	document.getElementById("btn").innerHTML = "Code скопирован";
	// close();
}

function copy(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}

document.addEventListener("DOMContentLoaded", function() {
  	code = new URL(location.href).searchParams.get('code'); 
	if (code == undefined) {
		document.getElementById("btn").setAttribute("disabled", "disabled")
		document.getElementById("btn").innerHTML = "Code отсутствует";
	}
})