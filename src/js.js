function myFunction() {

	var copyText = document.getElementById("myInput");
	copyText.type = "text"; 
	copyText.select();
	document.execCommand("copy");
	copyText.type = "hidden"; 
	document.querySelector("#btn").innerHTML = "Code скопирован";
	//window.close();
}
onload = function() {
	var url = location.href;    
	document.getElementById("myInput").value = url.slice(url.indexOf("def"), url.length) ;
};
