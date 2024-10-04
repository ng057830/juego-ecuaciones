// Variables globales para manejar el estado
let currentProblem = 0;

// Función para mostrar el problema seleccionado
function showProblem(problemNumber) {
    currentProblem = problemNumber;
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("problems").classList.remove("hidden");

    const problemContainer = document.getElementById("problemContainer");
    problemContainer.innerHTML = getProblemContent(problemNumber);
    MathJax.typeset(); // Re-renderizar LaTeX
}

// Función para regresar al menú después de resolver el problema
function goBackToMenu() {
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("problems").classList.add("hidden");
    document.getElementById("problemContainer").innerHTML = ''; // Limpiar contenido del problema
}

// Obtener el contenido de cada problema dinámicamente
function getProblemContent(problemNumber) {
    switch (problemNumber) {
        case 1:
            return `
                <h2>Problema 1</h2>
                <p>Multiplica: \\( 3x^2 \\cdot 4x^3 \\)</p>
                <p>Paso 1: ¿Cuál es el coeficiente resultante? (Multiplica 3 y 4)</p>
                <input type="number" id="inputProblem1Step1" placeholder="Ingresa tu respuesta">
                <button onclick="checkProblem1Step1()">Comprobar</button>
                <p id="feedbackProblem1Step1"></p>
                
                <p id="problem1Step2" class="hidden">Paso 2: ¿Cuál es el exponente de \\(x\\) resultante? (Suma los exponentes 2 y 3)</p>
                <input type="number" id="inputProblem1Step2" class="hidden" placeholder="Ingresa tu respuesta">
                <button id="problem1Step2Button" class="hidden" onclick="checkProblem1Step2()">Comprobar</button>
                <p id="feedbackProblem1Step2"></p>
            `;
        case 2:
            return `
                <h2>Problema 2</h2>
                <p>Multiplica: \\( (2x + 3)(x - 4) \\)</p>
                <!-- Implementa la lógica para este problema -->
            `;
        // Añadir más problemas similares con su respectiva lógica...
        default:
            return `<p>Problema no encontrado.</p>`;
    }
}

// Lógica de validación del Problema 1
function checkProblem1Step1() {
    var input = document.getElementById("inputProblem1Step1").value;
    var feedback = document.getElementById("feedbackProblem1Step1");
    if (input == 12) {
        feedback.innerHTML = "¡Correcto! Ahora suma los exponentes.";
        document.getElementById("problem1Step2").classList.remove("hidden");
        document.getElementById("inputProblem1Step2").classList.remove("hidden");
        document.getElementById("problem1Step2Button").classList.remove("hidden");
        MathJax.typeset(); // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Incorrecto. Recuerda multiplicar 3 por 4.";
    }
}

function checkProblem1Step2() {
    var input = document.getElementById("inputProblem1Step2").value;
    var feedback = document.getElementById("feedbackProblem1Step2");
    if (input == 5) {
        feedback.innerHTML = "¡Bien hecho! El resultado es \\(12x^5\\).";
        MathJax.typeset(); // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Incorrecto. Suma correctamente los exponentes de \\(x^2\\) y \\(x^3\\).";
    }
}
