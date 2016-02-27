function validateName () {
	var name = document.getElementById('commentName').value;

	if (name.length == 0) {
		producePrompt("Name is required", "commentNamePrompt", "commentName", "red", "solid 1px red");
		return false;
	}
	if (!name.match(/^[A-z]+$/)) {
		producePrompt("You can use only characters!", "commentNamePrompt", "commentName", "red", "solid 1px red" );
		return false;	
	}

	producePrompt("Welcome " + name, "commentNamePrompt", "commentName", "green", "solid 1px green");
	return true;

}

function producePrompt(message, promptLocation,borderLocation, color, border) {
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
	document.getElementById(borderLocation).style.border = border;
}