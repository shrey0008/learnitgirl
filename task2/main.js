var tablica =[];

function getdata() {
  
	var name = document.getElementById("name").value;
	tablica.push(name);

    var surname = document.getElementById("surname").value;
    tablica.push(surname)
    // document.getElementById("results").innerHTML = surnname;
    
    var town = document.getElementById('town').value;
    tablica.push(town);

   
    document.getElementsByClassName('results')[0].innerHTML= tablica;
    alert(tablica);
}

function checkNumber() {
	var num1 = parseInt(prompt("Enter first number"));
	var num2 = parseInt(prompt("Enter second number"));
	if (num1 > num2) {
		document.getElementById('maxNumber').innerHTML = "The greater is" + " " + num1;
		
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




