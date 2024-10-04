// Contenido del Problema 2 - Multiplicación de Monomios más complejo
function getProblemContent() {
    return `
        <h2>Problema 2</h2>
        <p>Multiplica: \\( (2x + 3)(x - 4) \\)</p>
        <p>Paso 1: Aplica la propiedad distributiva.</p>
        <input type="text" id="inputProblem2Step1" placeholder="Ingresa tu respuesta">
        <button onclick="checkProblem2Step1()">Comprobar</button>
        <p id="feedbackProblem2Step1"></p>

        <p id="problem2Step2" class="hidden">Paso 2: Simplifica el polinomio resultante.</p>
        <input type="text" id="inputProblem2Step2" class="hidden" placeholder="Ingresa tu respuesta">
        <button id="problem2Step2Button" class="hidden" onclick="checkProblem2Step2()">Comprobar</button>
        <p id="feedbackProblem2Step2"></p>
    `;
}

// Lógica de validación del Problema 2
function checkProblem2Step1() {
    var input = document.getElementById("inputProblem2Step1").value;
    var feedback = document.getElementById("feedbackProblem2Step1");
    if (input === "2x^2 - 8x + 3x - 12") {
        feedback.innerHTML = "¡Correcto! Ahora simplifica el polinomio.";
        document.getElementById("problem2Step2").classList.remove("hidden");
        document.getElementById("inputProblem2Step2").classList.remove("hidden");
        document.getElementById("problem2Step2Button").classList.remove("hidden");
        MathJax.typeset(); // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Incorrecto. Asegúrate de aplicar correctamente la propiedad distributiva.";
    }
}

function checkProblem2Step2() {
    var input = document.getElementById("inputProblem2Step2").value;
    var feedback = document.getElementById("feedbackProblem2Step2");
    if (input === "2x^2 - 5x - 12") {
        feedback.innerHTML = "¡Bien hecho! Has simplificado correctamente el polinomio.";
        MathJax.typeset(); // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Incorrecto. Simplifica correctamente el polinomio resultante.";
    }
}
