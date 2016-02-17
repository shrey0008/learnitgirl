function displayDate() {
	document.getElementById('date').innerHTML = Date();
}

function displayContent() {
	document.getElementById('change').innerHTML = "Of course it is!";
}

function changeCss() {
	var newStyle = document.getElementById('font'); 
	newStyle.style.size = "20px";
	newStyle.style.color = "red";
}

function validateValue() {
	var x = document.getElementById('validation').value;

	if ( isNaN(x) || x < 1 || x > 10) {
		var text = "Input not valid";
	}
	else {
		var text = "Input OK";
	}

	document.getElementById('inputValue').innerHTML = text;
}

function displayAlert() {
	alert("This is alert displayed!");
	console.log("ready!")

}


function displayResult() {
	var x = parseInt(prompt("Give first number"))
	var y = parseInt(prompt("Give second number"))
	var sum = x + y
	document.getElementById("choice").innerHTML = sum;
	alert(sum)
}
 // this is only a comment
function displayName() {
	var name = prompt("Give your name");
	var surname = prompt("Give your surname")
	var wholeName = "Hello" + " " + name + " " + surname 
	document.getElementById('welcome').innerHTML = wholeName;

}


// it's global variable
var Person = {name: "John", surname: "Potter", age: 22} 

function choosePerson() {
	document.getElementById('person').innerHTML = alert("You will be playing with" + " " + Person.name);
}


function dogData() {
	//  it's local variable
	var dog = {
	nm:  "Max",
	ag: 8,
	weight: 10,

	};
	var length = dog.nm.length
	document.getElementById('dog').innerHTML = dog.nm + " " + " is "  + dog.ag + " years old" +  " "  + "and weigh" + " " + dog.weight;
	document.getElementById('dogName').innerHTML = dog["nm"];
	document.getElementById('namecharacters').innerHTML = length;
	}


function locateStr() {
    var str = document.getElementById("locateStr").innerHTML;
    var pos = str.indexOf("locate");
    document.getElementById("demo").innerHTML = pos;
}

function max(num1, num2) {
	var num1 = parseInt(prompt("Enter first number"));
	var num2 = parseInt(prompt("Enter second number"));
	document.getElementById('maxNumber').innerHTML = max;

}