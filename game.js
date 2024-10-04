// Ejercicio 1 - Multiplicación de Monomios
function checkExercise1Step1() {
    var input = document.getElementById("inputExercise1Step1").value;
    var feedback = document.getElementById("feedbackExercise1Step1");
    if (input == 12) {
        feedback.innerHTML = "¡Correcto! Ahora suma los exponentes.";
        document.getElementById("exercise1Step2").classList.remove("hidden");
        document.getElementById("inputExercise1Step2").classList.remove("hidden");
        document.getElementById("exercise1Step2Button").classList.remove("hidden");
        MathJax.typeset();
    } else {
        feedback.innerHTML = "Incorrecto. Recuerda multiplicar 3 por 4.";
    }
}

function checkExercise1Step2() {
    var input = document.getElementById("inputExercise1Step2").value;
    var feedback = document.getElementById("feedbackExercise1Step2");
    if (input == 5) {
        feedback.innerHTML = "¡Bien hecho! El resultado es \(12x^5\).";
        // Desbloquear el siguiente ejercicio
        document.getElementById("exercise2").classList.remove("hidden");
        MathJax.typeset();
    } else {
        feedback.innerHTML = "Incorrecto. Suma correctamente los exponentes de \(x^2\) y \(x^3\).";
    }
}

// Lógica similar para los siguientes ejercicios
