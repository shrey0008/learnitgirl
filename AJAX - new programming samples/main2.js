// Create your xml object which communicate with server
// you have to create it always, so you can simply copy and paste it in any program you create
var xmlHttp = createXmlHttpRequestObject();
// object will return in global variable xmlHttp!
function createXmlHttpRequestObject() {
	var xmlHttp;
	// if window in your browser user this object / is aware of this object
		// this is how new browsers create xmlHttp object
	if(window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else {
		// this how older version of browsers create it
		// there are many AcriveXObject we need to specify it. 
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlHttp;
}

function process () {
// if the browser return void nothing happens
	if(xmlHttp) {
		// try to communicate with server - it could not be possinle even if you code is possible
		try {
// settings -> how you can connect with the server, how can you get it, 
// open does not connect with the server, it's only help use to create settings!
			xmlHttp.open("GET", "file.txt", true);
			// it's equal to function which manages a response from server
			// this function need to be created on our own, because every response is unique
			// any time something changes you want to call this function.
			// whenever I get server response this is how I want to hadle server function
			xmlHttp.onreadystatechange = handleServerResponse;
// send helps us to communicate with the server
			xmlHttp.send(null)
		} catch(e) {
			alert (e.toString ());
		}




	}
}


function handleServerResponse () {
	// states -> in order to any communications to be successful you need to guideline
 theD = document.getElementById('serverResponseResult');
 // we have 4 states - 1. tylko połączyć się z serverem(komunikacja sie zaczęła), 2,3. przetwarzanie, 4. kiedy zapytanie jest gotowe
 // google chrome ignores status 1!
 if (xmlHttp.readyState == 1) {
 	theD.innerHTML += "Status 1: server connection establish";
 }
 else if (xmlHttp.readyState == 2) {
 	// hey client I am server and I received your request
 	theD.innerHTML += "Status 2: server received the request";
 }
  else if (xmlHttp.readyState == 3) {
 	// hey client I am server and I am processing  your request
 	theD.innerHTML += "Status 3: request is processing";
 }
 else if (xmlHttp.readyState == 4) {
 	// the communication is ok, but it does not mean that communication is successful.
 		// status 200 oznacza, że wszystko jest ok!
 		if (xmlHttp.status == 200 ) {
 		try {
 			text = xmlHttp.responseText;
 			theD.innerHTML += "Status 4: request is finished and response is ready!";
 			theD.innerHTML += text;
 		} catch(e) { 
			alert (e.toString ());
		}


 		}
 }
else {
 alert ("something goes wrong!");
}
}