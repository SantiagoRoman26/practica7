<?php
	include('database.php');
	if (isset($_POST['nombres'])) {
		$nombres = $_POST['nombres'];
		$apellidos = $_POST['apellidos'];
		$query = "INSERT INTO usuarios(nombres, apellidos) VALUES ('$nombres', '$apellidos')";
		$resultado = mysqli_query($conexion, $query);

		if(!$resultado){
            echo '<script language="javascript">alert("juas");</script>';
			die('sentencia ha fallado');
        }
        
		echo "Se registró correctamente";
	}
?>