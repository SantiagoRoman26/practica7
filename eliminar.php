<?php
include('database.php');
if(isset($_POST ['id'])){
    $id = $_POST['id'];
    $query = "DELETE FROM usuarios WHERE id = $id";
    $resultado = mysqli_query($conexion,$query);
    if(!$resultado){
        die('senetencia ha fallado');
    }
    echo "se eliminó correctamente";
}
?>