function myFunction() {

	var url = new URL(location.href);    
	var code = url.searchParams.get('code');
	copy(code)
	document.querySelector("#btn").innerHTML = "Code скопирован";
	
	//close();
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
