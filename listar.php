<?php
    
	include('database.php');
	$query = "SELECT * FROM usuarios";
	$result = mysqli_query($conexion,$query);
	if(!$result){
		die('Query con problemas'.mysqli_error($conexion));
    }
    
	$json = array();
	while ($row = mysqli_fetch_array($result)) {
		$json[]= array(
			'nombres'=>$row['nombres'],
			'apellidos'=>$row['apellidos'],
			'id'=>$row['id']
		);
	}
	$jsonstring = json_encode($json);
	echo $jsonstring;
?>