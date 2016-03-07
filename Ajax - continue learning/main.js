var xmlHttp = createxmlHttpRequestObject();

// create create

function createxmlHttpRequestObject() {
	var xmlHttp;
	if(window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest ();
	}
	else {
		// for IE purpose
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	console.log(xmlHttp)
	return xmlHttp;
}

function process() {
	// if xmlHttp exists the way depends if we use IE or other browser
	 if (xmlHttp) {
	 	try {
	 		// settings
	 		xmlHttp.open("GET", "main.xml", true);
	 		// call function if xmlstate ==ready
	 		xmlHttp.onreadystatechange = handleStateChange;
	 		// send a request to main.xml
	 		xmlHttp.send(null)
	 	} catch(e) {
	 		alert(e.toString())
	 	}
	 }
}
// when state changes

function handleStateChange () {
// state 4 means that request is being sent
	if(xmlHttp.readyState == 4) {
		// 200 means everything looks correctly
		if (xmlHttp.status == 200) {
			try {
				handleResponse();
			} catch (e) {
				alert(e.toString());
			}
		}
		else {
			alert(xmlHttp.statusText);
		}
	}
}
// handle the server response

function handleResponse() {
	var xmlResponse = xmlHttp.responseXML;
	// in root I have this what I have in response section xml root is simply a response
	root = xmlResponse.documentElement;
	// in names I store what is in tag name "name" collected.
	names = root.getElementsByTagName('name')
	ssns = root.getElementsByTagName('ssn')

	// loop through 
// names does not matter because both names and ssns have the sane long
	var stuff = "" ;
	for (var i=0; i<names.length; i++) {
		// first child is a first element placed inside the other (parent)
			stuff += names.item(i).firstChild.data + "-" + ssns.item(i).firstChild.data + "</br>";
	}

	theD = document.getElementById('theD')
	theD.innerHTML = stuff;
}