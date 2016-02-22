
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

		if (isNaN(x)!=true) {
			var text = "Input not valid";
		}
		if (isNaN(x) == true) {
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

	

function toggle_visibility() {
       var e = document.getElementById('foo');
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }
$(document).ready(function() {
	// $('#type').html("<p>" + typeof "John" + '</p>')
	document.getElementById('type').innerHTML = typeof "john";


	// window.onload = function what(){
	// document.getElementById('type').innerHTML = typeof 'john';
// };
});
