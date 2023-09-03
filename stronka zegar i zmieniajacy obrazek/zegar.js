	function zegarek()
	{
	var dzisiaj = new Date();
	var dzien = dzisiaj.getDate();
	var rok = dzisiaj.getFullYear();
	var miesiac = dzisiaj.getMonth()+1;
	var godzina = dzisiaj.getHours();
	if(godzina<10)godzina = "0"+godzina;
	var minuta = dzisiaj.getMinutes();
	if(minuta<10) minuta ="0"+minuta;
	var sekunda = dzisiaj.getSeconds();
	if(sekunda<10) sekunda ="0"+sekunda;
	
	document.getElementById("zegar").innerHTML=dzien+"/"+miesiac+"/"+rok+"|"+godzina+":"+minuta+":"+sekunda;
	
	setTimeout("zegarek()",1000);
	
	}
	
	function sprawdz()
	{
		var liczba = document.getElementById("pole").value;
		if(liczba>0)
			document.getElementById("wynik").innerHTML="dodatnia";
		else if(liczba<0) 
			document.getElementById("wynik").innerHTML="ujemna";
		else if(liczba=="0")
			document.getElementById("wynik").innerHTML="zero";
		else if(liczba=="")
			document.getElementById("wynik").innerHTML="Nie wpisałeś liczby!";
		else
			document.getElementById("wynik").innerHTML="to nie jest liczba";
		
	}
	
function wypisz()
{
	var liczba1 = document.getElementById("pole1").value;
	var liczba2 = document.getElementById("pole2").value;
	var napis = "";
	if(liczba1>liczba2)
		document.getElementById("wynik").innerHTML="liczba1 ma byc mniejsza od liczba2!";
	else if(liczba1<liczba2)
	{
		for(i=liczba1;i<=liczba2; i++)
	{
		napis=napis+i+" ";
	}
	document.getElementById("wynik").innerHTML=napis;
	}
	else{
	document.getElementById("wynik").innerHTML="liczby są takie same";
	}
}
var numer = Math.floor(Math.random()*4)+1;
function slider()
{
	numer++; if(numer>4) numer=1;
	var plik = "<img src=\"zdjecie"+numer+".jpg\" height='500px' />";
	document.getElementById("slider").innerHTML=plik;
	setTimeout("slider()",5000);
}




