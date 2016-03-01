// $(document).ready(function() {

// 	console.log('ssas')


// 	$('#userField').keypress(function (event) {
// 		var keycode = (event.keyCode ? event.keyCode : event.which);

// 		if (keycode == '13') {
// 			var input = document.getElementById('userField').value;
// 			var display = document.getElementById('movies');	
// 			display.innerHTML += '<li>' + input + '</li> ';
// 			$('#userField').val('');
		   	
// 		}
	
// 	});
	
// });

// function createList() {
// 	var s;
// 	s = "<ul>" 
// 	+ "<li>The Scent of Woman </li>"
// 	+ "<li>Position Impossible </li>"
// "</ul>";
// 	divMovies = document.getElementById('divMovies');
// 	divMovies.innerHTML = s;
// }

function gameTime(){
	title = document.createTextNode("Here are some things!");
	list = document.createElement("ul");

	item1 = document.createElement("li");
	text1 = document.createTextNode("Old Dan")
	//  child to jest zawsze coś co jest w czymś
	item1.appendChild(text1);

	item2 = document.createElement("li");
	text2 = document.createTextNode("XYZ")
	item2.appendChild(text2);

	item3 = document.createElement("li");
	text3 = document.createTextNode("Chicken Wings")
	item3.appendChild(text3);

	list.appendChild(item1);
	list.appendChild(item2);
	list.appendChild(item3);

	theD = document.getElementById("theD");
	theD.appendChild(title);
	theD.appendChild(list);


}