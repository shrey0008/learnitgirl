
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
var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Mango"];


function addingElements() {
	
	for (var i=0; i<fruits.length; i++) {
			var x = ('<td>' + fruits[i] + '<td>');
		console.log(x);
	$('#tbody').append('<tr>' + x + '</tr>');
	}
}

// trying to add array's methods

var fruits = ["Banana", "Orange", "Purple"];

console.log(fruits.toString());

console.log(fruits.join());
console.log(fruits.join("+"));

var x = fruits.pop();
console.log(x);
console.log(fruits);

var y = fruits.shift()
console.log(y)
console.log(fruits);
var z = fruits.unshift("melon");
console.log(z);
console.log(fruits);
fruits[0] = "strawberry";
console.log(fruits);
fruits.splice(1,0, "melon");
console.log(fruits.toString());
fruits.splice(2,1);
console.log(fruits.toString());
console.log(fruits.sort().toString())
console.log(fruits.reverse().toString())

// how to sort numbers ascending in javascript 
// in the same way we can find the lowest value = numbers[0]
var numbers = [6,7,4,2,9,11];
var ascending = numbers.sort(function(a,b) { return a-b });

console.log(ascending);
//  how to sort numbers descending in javascript, in the same way we can find the highest value = numbers[0]
var numberstwo = [18,12,30,90,27,189];
var descending = numberstwo.sort(function(a,b) { return b-a });
console.log(descending);

var commonarray = numberstwo.concat(numbers);
console.log(commonarray.toString());

var newarray = commonarray.slice(5);
console.log(newarray.toString())
// from part of commonarray I create a newestaaray

var newestarray = commonarray.slice(2,4); 
console.log(newestarray.toString());

 function votable() {
    
    var age = document.getElementById("age").value;
   
    
		if (isNaN(age) === false) {
				var voteable = (age < 18) ? "Too young" : "Old enough";
		}
		else if (isNaN(age)) {
			var voteable = "input error";
		}
	// two different text displaying on condition the user's input.
    // var voteable = (age < 18) ? "Too young":"Old enough";
    document.getElementById("vote").innerHTML = voteable;
}

	

