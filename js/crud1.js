$(document).ready(function () {

    obtenerTareas();
    let modificar = false;
    function obtenerTareas() {
        $.ajax({
            url: 'listar.php',
            type: 'GET',
            success: function (tareas) {
                let tasks = JSON.parse(tareas);
                let template = '';
                tasks.forEach(task =>{
                    template += `
                    <tr taskId="${task.id}">
                        <th><a href="#" class="task-item">${task.id}</a></th>
                        <th>${task.nombres}</th>
                        <th>${task.apellidos}</th>
                        <th><button class="task-delete btn btn-primary">Editar</button></th>
                        <th><button class="task-delete btn btn-danger data-toggle="modal" data-target="#modal2">Eliminar</button></th>
                    </tr>
                    `
                });
                $('#listado').html(template);
            }
        });
    }
    $('#task-form').submit(e => {
        const datos = {
            nombres: $('#nombres').val(),
            apellidos: $('#apellidos').val(),
            id: $('#taskId').val(),
        }
        const url = modificar === false ? 'insertar.php' : 'modificar.php';
        $.post(url, datos, (response) => {
            obtenerTareas();
        });
    });
    

    $(document).on('click', '.task-delete', (e) => {
        const elemento = $(this)[0].activeElement.parentElement.parentElement;
        const id = $(elemento).attr('taskId');
        console.log(id);
        $.post('eliminar.php', { id }, (response) => {
            obtenerTareas();
        });
    });
    $(document).on('click', '.task-update', (e)=>{
        const elemento = $(this)[0].activeElement.parentElement.parentElement;
        const id = $(elemento).attr('taskId');
        console.log(id);
        $.post('getTarea.php',{id},(response)=>{
            console.log(response);
            const task = JSON.parse(response);  
            $('#nombres').val(task.nombres);
            $('#apellidos').val(task.apellidos);
            $('#taskId').val(task.id);
            modificar = true;
        });
        $('#modal1').modal('show');
    }); 
    
});