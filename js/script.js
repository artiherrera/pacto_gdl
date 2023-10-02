// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registro-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Detiene el envío del formulario
        
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        // ... otros campos

        if (!nombre || !apellido /* ... otros campos */) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        // Aquí puedes agregar el código para enviar los datos a tu base de datos
    });
});
