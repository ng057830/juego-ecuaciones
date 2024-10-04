// Función para mostrar el problema seleccionado
function showProblem(problemNumber) {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("problems").classList.remove("hidden");

    const problemContainer = document.getElementById("problemContainer");

    // Cargar dinámicamente el archivo del problema correspondiente
    loadScript(`problem${problemNumber}.js`, function() {
        problemContainer.innerHTML = getProblemContent();  // Contenido del problema desde problemX.js
        MathJax.typeset();  // Re-renderizar LaTeX para mostrar correctamente las expresiones
    });
}

// Función para volver al menú
function goBackToMenu() {
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("problems").classList.add("hidden");
    document.getElementById("problemContainer").innerHTML = ''; // Limpiar contenido del problema
}

// Función para cargar dinámicamente scripts de problemas
function loadScript(url, callback) {
    const script = document.createElement("script");
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}
