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

	producePrompt("OK!", "commentNamePrompt", "commentName", "green", "solid 1px green");
	return true;

}



function validateSurname () {
	
	var surname = document.getElementById('commentLastName').value;

	if (surname.length == 0) {
		producePrompt("Surname is required", "commentLastNamePrompt", "commentLastName", "red", "solid 1px red");
		
		return false;
	}
	if (!surname.match(/^[A-z]+$/)) {
		producePrompt("You can use only characters!", "commentLastNamePrompt", "commentLastName", "red", "solid 1px red" );
		return false;	
	}

	producePrompt("OK!", "commentLastNamePrompt", "commentLastName", "green", "solid 1px green");
	return true;

}

function validatePhone() {
	var phone = document.getElementById('commentPhone').value;

	if (phone.length == 0) {
		producePrompt("Phone is required", "commentPhonePrompt", "commentPhone", "red", "solid 1px red");
		return false;
	}
	if (phone.length != 9) {
		producePrompt("Phone requires 9 digits", "commentPhonePrompt", "commentPhone", "red", "solid 1px red" );
		return false;	
	}
	if (!phone.match(/^[0-9]{9}$/)) {
		producePrompt("Phone requires digits", "commentPhonePrompt", "commentPhone", "red", "solid 1px red" );
		return false;	
	}

	producePrompt("OK!", "commentPhonePrompt", "commentPhone", "green", "solid 1px green");
	return true;


}


function validateEmail () {
	var email = document.getElementById('commentEmail').value;

	if (email.length == 0) {
		producePrompt("Email is required", "commentEmailPrompt", "commentEmail", "red", "solid 1px red");
		return false;
	}
	if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
		producePrompt("You have to type a proper email address. Check if @ is available", "commentEmailPrompt", "commentEmail", "red", "solid 1px red" );
		return false;	
	}

	producePrompt("OK!", "commentEmailPrompt", "commentEmail", "green", "solid 1px green");
	return true;


}




function validateComment() {
	var comment = document.getElementById('comment').value;
	var required = 20;
	var left = required - comment.length;

	if (left > 0) {
		producePrompt(left + " Characters required", "commentPrompt", "comment", "red", "solid 1px red");
		return false;
	}


	producePrompt("OK!", "commentPrompt", "comment", "green", "solid 1px green");
	return true;

}



function validateForm() {

	if (!validateName() && !validateComment() && !validateEmail () && !validatePhone() && !validateSurname ()) {
	
		submitPrompt("COMPLETE FORM!", "submitPrompt", "red");
	
		return false;
	}
}


function hidePrompt() {
		document.getElementById('submitPrompt').style.display = "none";
}


function producePrompt(message, promptLocation, borderLocation, color, border) {
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
	document.getElementById(borderLocation).style.border = border;
}

function submitPrompt(message, promptLocation, color) {
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}
