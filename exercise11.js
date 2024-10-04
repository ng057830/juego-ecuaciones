// Función para validar el signo
document.getElementById('signSelect').addEventListener('change', function() {
    var sign = document.getElementById('signSelect').value;
    var feedback = document.getElementById('feedbackStep1');

    if (sign === 'pos' || sign === 'neg') {
        feedback.innerHTML = "¡Correcto! Elige las variables involucradas.";
        MathJax.typeset();  // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Por favor selecciona un signo válido.";
    }
});

// Función para validar las variables
document.getElementById('varX').addEventListener('change', function() {
    var varX = document.getElementById('varX').checked;
    var feedback = document.getElementById('feedbackStep2');
    
    if (varX) {
        feedback.innerHTML = "¡Correcto! La variable involucrada es \\( x \\).";
        MathJax.typeset();  // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Selecciona la variable correcta.";
    }
});

// Función para validar el coeficiente
function checkStep3() {
    var input = document.getElementById('coefInput').value.trim();
    var feedback = document.getElementById('feedbackStep3');
    
    if (input == "-20") {
        feedback.innerHTML = "¡Correcto! El coeficiente es -20.";
    } else {
        feedback.innerHTML = "Incorrecto. Multiplica 4 y -5.";
    }
}

// Función para validar la multiplicación de exponentes
function checkStep4() {
    var input = document.getElementById('expInput').value.trim();
    var feedback = document.getElementById('feedbackStep4');
    
    if (input == "5") {
        feedback.innerHTML = "¡Correcto! El exponente resultante es \\( x^5 \\).";
        // Mostrar el resultado final en LaTeX
        document.getElementById('finalResult').innerHTML = "\\[ -20x^5 \\]";
        MathJax.typeset();  // Re-renderizar LaTeX
    } else {
        feedback.innerHTML = "Incorrecto. Recuerda sumar los exponentes: \\(2 + 3\\).";
        MathJax.typeset();  // Re-renderizar LaTeX
    }
}
