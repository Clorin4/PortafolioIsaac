const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const edad = document.querySelector('#edad');
const contrasena = document.querySelector('#contrasena');
const form = document.querySelector('#formulario');

const errorNombre = document.querySelector('#error-nombre');
const errorCorreo = document.querySelector('#error-correo');
const errorEdad = document.querySelector('#error-edad');
const errorContrasena = document.querySelector('#error-contrasena');
const mensajeExito = document.querySelector('#mensaje-exito');
const bienvenida = document.querySelector('#welcome');

// Mostrar nombre si ya está en localStorage
window.onload = () => {
  const nombreGuardado = localStorage.getItem('nombre');
  if (nombreGuardado) {
    bienvenida.textContent = `Bienvenido de nuevo, ${nombreGuardado}!`;
  }
};

function validarCampo(campo, condicion, errorElemento) {
  if (!condicion) {
    campo.classList.add('invalid');
    errorElemento.style.display = 'block';
    return false;
  } else {
    campo.classList.remove('invalid');
    errorElemento.style.display = 'none';
    return true;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombreValido = validarCampo(nombre, nombre.value.trim().length >= 3, errorNombre);
  const correoValido = validarCampo(correo, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value), errorCorreo);
  const edadValida = validarCampo(edad, edad.value >= 18 && edad.value <= 99, errorEdad);
  const contrasenaValida = validarCampo(contrasena, contrasena.value.length >= 6, errorContrasena);

  if (nombreValido && correoValido && edadValida && contrasenaValida) {
    localStorage.setItem('nombre', nombre.value.trim());
    localStorage.setItem('correo', correo.value.trim());
    localStorage.setItem('edad', edad.value.trim());

    mensajeExito.style.display = 'block';
    form.reset();
  } else {
    mensajeExito.style.display = 'none';
  }
});
