<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<head>
<title> Ptaki</title>
<link rel="stylesheet" href="styl8.css">
</head>
<body>
	<div class="menu">
		<a href="index.php">PTAKI</a>
		<a href="procesory.php">SSAKI</a>
		<a href="ram.php">GADY</a>
		<a href="grafika.php">PŁAZY</a>

	</div>	
	
		<div class="logo">
		<h1> PTAKI</h1>
	</div>
	
	





<div class="prawo">
<?php
    $connect = mysqli_connect("localhost", "root", "","bazaa");
    $query = "select zwierzeta.id, zwierzeta.gatunek, zwierzeta.wystepowanie, gromady.nazwa from zwierzeta inner join gromady on zwierzeta.gromady_id = gromady.id where gromady_id = 4 or gromady_id = 5";
    $result = mysqli_query($connect,$query) or die ("nie dziala query");

    while ($i = mysqli_fetch_array($result))
    {
        echo $i['id'].". ".$i['gatunek']."<br>Zamieszkuje: ".$i['wystepowanie'].", ".$i['nazwa']."<br><hr>";
    }
		

?>
</div>


<div class="lewo">
<ol>
<?php
   $connect = mysqli_connect("localhost", "root", "","bazaa");
    $query = "select gatunek, obraz from zwierzeta where gromady_id = '4'";
    $result = mysqli_query($connect,$query) or die ("nie dziala query");

    while ($i = mysqli_fetch_array($result))
    {
		
        echo "<li><a href=".$i[1].">".$i['gatunek']."</a></li>";
    }
?>
</ol>

<img src="sroka.jpg">
</div>


		<div class="stopka">
		<p>Stronę wykonał:PESEL</p>
	</div>
	

</body>
</html>
