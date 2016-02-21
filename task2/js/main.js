var tablica =[];

function getData() {
  
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
 	var town = document.getElementById('town').value;

		if (name === "" && surname === "" && town === "") {
		  		checkFields();
		  } 
		
		else {
	  	
	  	$('.results').append(createRow(name, surname, town));
	   		alert(name + " " + surname + " " + town);
	   		clearFields();
	   	}
	   	
	$('.form-control').val("");
	


 }

function createRow(name, surname, town) {
	return 	('<tr> <td>' + name + '</td>' + '<td>' + surname + '</td>' + '<td>' + town + '</td> <tr>');
	 		
}

function checkNumber() {
	var num1 = parseInt(prompt("Enter first number"));
	var num2 = parseInt(prompt("Enter second number"));
	if (num1 > num2) {
		document.getElementById('maxNumber').innerHTML = "The greater is" + " " + num1;
		
	}
	else if (num1 === num2) {
		document.getElementById('maxNumber').innerHTML = "The numers are the same";
	}
	else {
		document.getElementById('maxNumber').innerHTML = "The greater is" + " " + num2;
	}
	

}

function max(num1, num2) {
	if (num1 > num2) {
		return num1;
	}
	else {
		return num2;
	}
}

console.log(max(10,6));


var stringArray = ["first string", "sjsa", "skdshfjksdh jsdhkjsdh ksjd sjdhskjd"]; 

function findWord() {
	var max=0;
	for (var i=0; i<stringArray.length; i++) {
		if (stringArray[i].length > max) {
			var max = stringArray[i].length;
		}
	}
	console.log(max);
}

findWord();

var multiplyArray = [6,7,8,12,3,4,9];


function multiply(tablica) {
	var multiplyResult = 1;	

	for (var i=0; i<tablica.length; i++) {
		multiplyResult = multiplyResult * tablica[i];
			
	}
		return multiplyResult;
}

console.log(multiply(multiplyArray));


var sumArray = [6,7,8,12,3,4,9];


function sum(tablica) {
	var sumResult = 0;	

	for (var i=0; i<tablica.length; i++) {
		sumResult += tablica[i];
			
	}
		return sumResult;
}

console.log(sum(sumArray));

function checkInp() {
  var n=document.getElementById('name').value;
  var nm=document.getElementById('name');
  if (isNaN(n)!=true) 
  {
    nm.style.border = "solid red 1px";
  }
 
  else {
  	nm.style.border = "solid green 1px";
  }
 
 
}

function checkField() {
	var sn=document.getElementById('surname').value;
	var snm=document.getElementById('surname');
   	if (isNaN(sn)!=true) {
	    snm.style.border = "solid red 1px";
  	}
  	else {
  		snm.style.border = "solid green 1px";
  	}
  }

function validateValue() {
	var t=document.getElementById('town').value;
	var tn=document.getElementById('town');
   	if (isNaN(t)!=true) {
	    tn.style.border = "solid red 1px";
	}
	else {
		tn.style.border = "solid green 1px";
	}

}
function checkFields() {
	document.getElementById('name').style.border = "solid red 1px"
	document.getElementById('surname').style.border = "solid red 1px"
	document.getElementById('town').style.border = "solid red 1px"
	document.getElementById('alertdanger').style.display = "block";
	
	}

function clearFields() {
	document.getElementById('name').style.border = "solid black 1px";
	document.getElementById('surname').style.border = "solid black 1px";
	document.getElementById('town').style.border = "solid black 1px";
}

function fadeOut() {
	$('.alert-danger').fadeOut();
}