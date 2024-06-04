$(document).ready(function(){
    // Al hacer clic en el botón de guardar
    $("#botonGuardar").click(function(){
        // Obtener el texto ingresado por el usuario
        var texto = $("#textoInput").val();
        
        // Obtener la fecha y hora actual
        var fechaHora = new Date().toLocaleString();
        
        // Crear una nueva fila en la tabla con el texto ingresado y la fecha y hora
        var nuevaFila = "<tr><td>" + texto + "</td><td>" + fechaHora + "</td></tr>";
        
        // Agregar la nueva fila a la tabla
        $("#tablaDatos tbody").append(nuevaFila);
        
        // Limpiar el campo de texto después de guardar
        $("#textoInput").val("");
    });
});
