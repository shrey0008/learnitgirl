var xmlHttp = createXmlHttpRequestObject();


// wszystkie programy będą używać takiej funkcji javascript.
// tworzy obiekt do komunikacji
function createXmlHttpRequestObject() {

	var xmlHttp;

	if(window.ActiveXObject) {
		try {
		// to jest tylko do Internet Explorer
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} catch(e) {
		xmlHttp = false;
	}
} else {
	try {
		xmlHttp = new XMLHttpRequest() ;
	}
	catch(e) {
		xmlHttp = false;
	}
}
// to używamy jeśli chcemy powiedzieć userowi, że coś jest nie tak.
if (!xmlHttp){
	alert("cant create that object!")
}
else {
	return xmlHttp;
}
}
// jest odpowiedzialna za komuniakcję z serverem. branie obiektu, który został utworzony i wysyłanie zapytania do serwera, jest wywoływana jak tylko strona zostanie załodowania
function process () {
	// xmlHttp to jest obiekt do komunikowania się z serwerem.
	//  obiekt ma różne stany -> jeśli if = true to wówczas naczy że obiekt jest wolny
	 // i gotowy do komunikowania się z serwerem.  
	if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4) {
		food = encodeURIComponent(document.getElementById('userInput').value);
		// tutaj będą funkcje, których nie trzeba wymyślać, tylko się trzeba nauczyć.
		// open() tworzy zapytanie, które zostało wysłane do serwera
		// open() tworzy typ zapytania
		// pierwszy parametr określa jakie zapytanie poszło do serwera
		// drugi parametr określa miejsce do któego idzie zapytanie/ do jakiego url (daj mi ten url)

		xmlHttp.open("GET", "foodstore.php?food="+ food ,true)
		// chcemy wywołać odpowiedź serwera na każde nasze zapytanie (wywołać tą funkcję na każde zapytanie)
		// aktualizuje twoją stronę albo element na stronie.
		xmlHttp.onreadystatechange = handleServerResponse;
//  	tuta jest null bo używam "get" przy post jest inaczej
		xmlHttp.send(null);
	} else {
		// jeśli obiekt jest gotowy do komunikowania to ok, natomiast jeśli nie to mówimu- ok przyjdę za  2s. 
		setTimeout('process()', 1000)

	}
}

// w ajax potrzebuję sprawdzić, czy mój obiekt jest gotowy do komunikacji
// potem uzyskuję jakąś informację ze strony
// potem przygotowuje moje zapytanie
// potem - jak dostanę odpowiedź z serwera to to co ja chcę zrobić to wywołać funckję handleServerResponse
function handleServerResponse() {
	if(xmlHttp.readyState == 4) {
		//  if the communication is ready
		if(xmlHttp.status == 200) {
			// to oznacza, że sesja komunikacji jest ok
		//  jak jest ok to chcemy mieć xml file i przechować to w zmiennej.
		xmlResponse = xmlHttp.responseXML;
		xmlDocumentElement = xmlResponse.documentElement;
		message = xmlDocumentElement.firstChild.data;
		document.getElementById("undertInput").innerHTML = '<span style="color: blue">' + message  + '</span>';;
		setTimeout('process()', 1000)
}
}
// else {
// 	alert("1")
// }
}


