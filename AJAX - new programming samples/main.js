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

function createList() {
	var s;
	s = "<ul>" 
	+ "<li>The Scent of Woman </li>"
	+ "<li>Position Impossible </li>"
"</ul>";
	divMovies = document.getElementById('divMovies');
	divMovies.innerHTML = s;
}
