// Función para limpiar y formatear la entrada del usuario eliminando espacios innecesarios
function cleanInput(input) {
    // Eliminar todos los espacios en blanco de la entrada del usuario
    return input.replace(/\s+/g, '');
}

// Contenido del Problema 2 - Multiplicación de Binomios
function getProblemContent() {
    return `
        <h2>Problema 2: Multiplicación de Binomios</h2>
        <p>Multiplica los binomios: \\( (2x + 3)(x - 4) \\)</p>

        <!-- Paso 1: Distribuir 2x -->
        <p>Paso 1: Aplica la propiedad distributiva al primer término \\(2x\\) multiplicando cada término del segundo binomio \\((x - 4)\\).</p>
        <p>Multiplica: \\(2x \\cdot x\\) y \\(2x \\cdot -4\\)</p>
        <input type="text" id="inputProblem2Step1" placeholder="Ingresa el resultado de \\(2x \\cdot x + 2x \\cdot -4\\)">
        <button onclick="checkProblem2Step1()">Comprobar</button>
        <p id="feedbackProblem2Step1"></p>

        <!-- Paso 2: Distribuir 3 -->
        <p id="problem2Step2" class="hidden">Paso 2: Ahora, multiplica el segundo término \\(3\\) por cada término del segundo binomio \\((x - 4)\\).</p>
        <p id="distributionExplanationStep2" class="hidden">Multiplica: \\(3 \\cdot x\\) y \\(3 \\cdot -4\\)</p>
        <input type="text" id="inputProblem2Step2" class="hidden" placeholder="Ingresa el resultado de \\(3 \\cdot x + 3 \\cdot -4\\)">
        <button id="problem2Step2Button" class="hidden" onclick="checkProblem2Step2()">Comprobar</button>
        <p id="feedbackProblem2Step2"></p>

        <!-- Paso 3: Combinar términos semejantes -->
        <p id="problem2Step3" class="hidden">Paso 3: Combina los términos semejantes resultantes de la multiplicación para obtener el polinomio final.</p>
        <input type="text" id="inputProblem2Step3" class="hidden" placeholder="Ingresa el polinomio simplificado">
        <button id="problem2Step3Button" class="hidden" onclick="checkProblem2Step3()">Comprobar</button>
        <p id="feedbackProblem2Step3"></p>
    `;
}

// Lógica de validación del Paso 1 (Distribuir 2x)
function checkProblem2Step1() {
    var input = cleanInput(document.getElementById("inputProblem2Step1").value);
    var feedback = document.getElementById("feedbackProblem2Step1");
    
    try {
        // Validar la expresión limpiada usando math.simplify() de math.js
        if (math.equal(math.simplify(input), math.simplify("2x^2 - 8x"))) {
            feedback.innerHTML = "¡Correcto! Has distribuido bien el término \\(2x\\).";
            document.getElementById("problem2Step2").classList.remove("hidden");
            document.getElementById("distributionExplanationStep2").classList.remove("hidden");
            document.getElementById("inputProblem2Step2").classList.remove("hidden");
            document.getElementById("problem2Step2Button").classList.remove("hidden");
            MathJax.typeset(); // Re-renderizar LaTeX
        } else {
            feedback.innerHTML = "Incorrecto. Recuerda que debes multiplicar \\(2x \\cdot x = 2x^2\\) y \\(2x \\cdot -4 = -8x\\).";
        }
    } catch (error) {
        feedback.innerHTML = "Parece que hay un error en tu entrada. Asegúrate de ingresar una expresión válida.";
    }
}

// Lógica de validación del Paso 2 (Distribuir 3)
function checkProblem2Step2() {
    var input = cleanInput(document.getElementById("inputProblem2Step2").value);
    var feedback = document.getElementById("feedbackProblem2Step2");

    try {
        // Validar la expresión limpiada usando math.simplify()
        if (math.equal(math.simplify(input), math.simplify("3x - 12"))) {
            feedback.innerHTML = "¡Bien hecho! Ahora tienes los términos resultantes de la distribución.";
            document.getElementById("problem2Step3").classList.remove("hidden");
            document.getElementById("inputProblem2Step3").classList.remove("hidden");
            document.getElementById("problem2Step3Button").classList.remove("hidden");
            MathJax.typeset(); // Re-renderizar LaTeX
        } else {
            feedback.innerHTML = "Incorrecto. Recuerda que \\(3 \\cdot x = 3x\\) y \\(3 \\cdot -4 = -12\\).";
        }
    } catch (error) {
        feedback.innerHTML = "Parece que hay un error en tu entrada. Asegúrate de ingresar una expresión válida.";
    }
}

// Lógica de validación del Paso 3 (Combinar términos semejantes)
function checkProblem2Step3() {
    var input = cleanInput(document.getElementById("inputProblem2Step3").value);
    var feedback = document.getElementById("feedbackProblem2Step3");

    try {
        // Validar la expresión limpiada usando math.simplify()
        if (math.equal(math.simplify(input), math.simplify("2x^2 - 5x - 12"))) {
            feedback.innerHTML = "¡Excelente trabajo! El resultado final es \\(2x^2 - 5x - 12\\).";
            MathJax.typeset(); // Re-renderizar LaTeX
        } else {
            feedback.innerHTML = "Incorrecto. Recuerda combinar los términos \\(-8x + 3x = -5x\\).";
        }
    } catch (error) {
        feedback.innerHTML = "Parece que hay un error en tu entrada. Asegúrate de ingresar una expresión válida.";
    }
}
