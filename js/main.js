document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');

  const nombreError = document.getElementById('nombre-error');
  const emailError = document.getElementById('email-error');
  const mensajeError = document.getElementById('mensaje-error');
  const successMessage = document.getElementById('form-success');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    // Reset mensajes
    nombreError.style.display = 'none';
    emailError.style.display = 'none';
    mensajeError.style.display = 'none';
    successMessage.style.display = 'none';

    // Validación nombre
    if (nombre.value.trim().length < 2) {
      nombreError.style.display = 'block';
      nombre.focus();
      valid = false;
    }

    // Validación email
    if (!emailRegex.test(email.value.trim())) {
      emailError.style.display = 'block';
      if (valid) email.focus();
      valid = false;
    }

    // Validación mensaje
    if (mensaje.value.trim().length < 10) {
      mensajeError.style.display = 'block';
      if (valid) mensaje.focus();
      valid = false;
    }

    if (valid) {
      successMessage.style.display = 'block';
      form.reset();
    }
  });
});
