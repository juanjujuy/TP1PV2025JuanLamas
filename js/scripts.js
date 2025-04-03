    // Funcion que se ejecuta cuando se hace clik en un boton
    function enviarFormulario() {
        //Evitar que el formulario se envie y la pagina se recargue
        event.preventDefault();

        // Obtener los valores de los inputs
        var apellido = document.getElementById("apellido").value;
        var nombre = document.getElementById("nombre").value;

        // Mostrar los valores en la consola
        console.log("nombre", nombre);
        console.log("apellido", apellido);
        
        alert("nombre: " +nombre+" y apellido: "+apellido);
    }