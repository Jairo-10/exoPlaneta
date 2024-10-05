document.addEventListener('DOMContentLoaded', function() {
    const boton = document.createElement('button');
    boton.textContent = "Descubre más sobre los exoplanetas";
    document.body.appendChild(boton);

    boton.addEventListener('click', function() {
        alert('Los exoplanetas son fascinantes porque...');
    });
});