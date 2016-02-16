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



