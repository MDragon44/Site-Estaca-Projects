function switchStyle() {
	// document.getElementById("mycss").setAttribute("href", style);
	var style = document.getElementById("mycss").getAttribute("href")
    if(style == "css/style_light.css"){
	   document.getElementById("light").checked = true;
       document.getElementById("mycss").setAttribute("href", "css/style_dark.css");
	   localStorage.setItem("light", 1);
    }
    else{
	   document.getElementById("light").checked = false;
       document.getElementById("mycss").setAttribute("href", "css/style_light.css");
	   localStorage.setItem("light", 0);
    }
}
		
// Thème par défaut en fonction de l'heure
// var hour = new Date().getHours();
// if (hour > 8 && hour < 19) {
	// document.getElementById("mycss").setAttribute("href", 'css/style_light.css');
	// document.getElementById("light").checked = false;
// }
// else {
	// document.getElementById("mycss").setAttribute("href", 'css/style_dark.css');
	// document.getElementById("light").checked = true;
// }

// function onlight() {
	var style = document.getElementById("mycss").getAttribute("href")
	var Sun = localStorage.getItem("light");
	if(Sun==1){
		document.getElementById("light").checked = true;
       document.getElementById("mycss").setAttribute("href", "css/style_dark.css");
	}
	else{
	document.getElementById("light").checked = false;
       document.getElementById("mycss").setAttribute("href", "css/style_light.css");
	}
// }