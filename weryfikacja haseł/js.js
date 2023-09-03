function cyfra(x)
{
	var d=x.length;
	for(i=0; i<d; i++)
	{
		if (x.charAt(i)=="0" || x.charAt(i)=="1" || x.charAt(i)=="2" || x.charAt(i)=="3" || x.charAt(i)=="4" || x.charAt(i)=="5" || x.charAt(i)=="6" || x.charAt(i)=="7" || x.charAt(i)=="8" || x.charAt(i)=="9")
			return true;
	}
	return false;
}



function weryfikuj()
{
var haslo = document.getElementById("haslo").value;
var d = haslo.length;
 if (haslo=="")
 {
	 document.getElementById("wynik").innerHTML='<span style="color:red;">HASŁO JEST PUSTE</span>';
 }
else if(d>=7&&cyfra(haslo)==true)
{
	document.getElementById("wynik").innerHTML='<span style="color:green;">HASŁO JEST DOBRE</span>';
}
else if(d>=4 && d<=6 &&cyfra(haslo)==true)
{
	document.getElementById("wynik").innerHTML='<span style="color:blue;">HASŁO JEST ŚREDNIE</span>';
}
else
{
	document.getElementById("wynik").innerHTML='<span style="color:yellow;">HASŁO JEST SŁABE</span>';
}
}