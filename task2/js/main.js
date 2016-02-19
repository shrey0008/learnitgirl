var tablica =[];

function getData() {
  
	var name = document.getElementById("name").value;
	
    var surname = document.getElementById("surname").value;
    
    // document.getElementById("results").innerHTML = surnname;
    
    var town = document.getElementById('town').value;
  	// validateValue();
  	// show();
   
    document.getElementsByClassName('results')[0].innerHTML= name + " " + surname + " " + town;
    alert(name + " " + surname + " " + town);
 }

function show() {
  document.getElementsByClassName('alert alert-danger')[0].style.display = 'block';
}


function validateValue() {

	if($('.form-control').val()=="") {
		show();
	}
	else {
		getData();
	}
	
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

