function ksztalt()
{
	var ksztalt = document.getElementById("kszt").value
	if(ksztalt==1)
		document.getElementById("wynikksztalt").innerHTML="Wybrałeś kształt:Misia!"
	else if(ksztalt==2)
		document.getElementById("wynikksztalt").innerHTML="Wybrałeś kształt:Żabka!"
	else if(ksztalt==3)
		document.getElementById("wynikksztalt").innerHTML="Wybrałeś kształt:Serce!"
	else 
		document.getElementById("wynikksztalt").innerHTML="Wybrałeś inney kształt"
}