<?php
include('database.php');
if(isset($_POST ['id'])){
    $id = $_POST['id'];
    $nombres = $_POST ['nombres'];
    $apellidos = $_POST ['apellidos'];
    $query = "UPDATE usuarios SET nombres = '$nombres', apellidos = '$apellidos' WHERE id = $id";
    $resultado = mysqli_query($conexion,$query);
    if(!$resultado){
        die('senetencia ha fallado');
    }
    echo "se registro correctamente";
}

?>