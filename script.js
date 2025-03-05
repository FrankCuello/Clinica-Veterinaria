document.addEventListener('DOMContentLoaded', function() {
    const formularioContacto = document.getElementById('formulario-contacto');
    const modalConfirmacion = new bootstrap.Modal(document.getElementById('modalConfirmacion'));

    formularioContacto.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío por defecto del formulario

        // Validacion del email (simple, se puede mejorar con regex más robusto)
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        if (!validarEmail(emailValue)) {
            alert('Por favor, introduce un email válido.');
            emailInput.focus();
            return; // Detener el proceso si el email no es válido
        }

        // Simulación de envío exitoso y mostrar modal
        console.log('Formulario enviado (simulado)');
        modalConfirmacion.show();
        formularioContacto.reset(); // Limpia el formulario tras "enviar"
    });

    function validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    // Smooth scroll para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});