// Multiplicación - Paso 1
function checkMultiplicationStep1() {
    var input = document.getElementById("inputMultiplication1").value;
    var feedback = document.getElementById("feedbackMultiplication1");
    if (input == 12) {
        feedback.innerHTML = "¡Correcto! Ahora suma los exponentes.";
        document.getElementById("multiplicationStep2").classList.remove("hidden");
        MathJax.typeset(); // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Incorrecto. Recuerda multiplicar 3 por 4.";
    }
}

// Multiplicación - Paso 2
function checkMultiplicationStep2() {
    var input = document.getElementById("inputMultiplication2").value;
    var feedback = document.getElementById("feedbackMultiplication2");
    if (input == 5) {
        feedback.innerHTML = "¡Bien hecho! El resultado es \(12x^5\).";
        document.getElementById("finalMultiplicationStep").classList.remove("hidden");
        document.getElementById("divisionStep1").classList.remove("hidden"); // Desbloquear sección de división
        MathJax.typeset(); // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Incorrecto. Debes sumar los exponentes de 2 y 3.";
    }
}

// División - Paso 1
function checkDivisionStep1() {
    var input = document.getElementById("inputDivision1").value;
    var feedback = document.getElementById("feedbackDivision1");
    if (input == 3) {
        feedback.innerHTML = "¡Correcto! Ahora resta los exponentes.";
        document.getElementById("divisionStep2").classList.remove("hidden");
        MathJax.typeset(); // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Incorrecto. Recuerda dividir 12 entre 4.";
    }
}

// División - Paso 2
function checkDivisionStep2() {
    var input = document.getElementById("inputDivision2").value;
    var feedback = document.getElementById("feedbackDivision2");
    if (input == 3) {
        feedback.innerHTML = "¡Excelente! El resultado es \(3x^3\).";
        document.getElementById("finalDivisionStep").classList.remove("hidden");
        document.getElementById("finalTest").classList.remove("hidden"); // Desbloquear prueba final
        MathJax.typeset(); // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Incorrecto. Recuerda restar 5 menos 2.";
    }
}

// Prueba final
function checkFinalTest() {
    var input = document.getElementById("inputFinal1").value;
    var feedback = document.getElementById("feedbackFinal");
    if (input == -3) {
        feedback.innerHTML = "¡Muy bien! El coeficiente es -3. Has completado el ejercicio.";
        MathJax.typeset(); // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Incorrecto. Intenta dividir -24 entre 8.";
    }
}
