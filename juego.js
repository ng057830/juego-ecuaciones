// Crear la instancia de MathGames API
var mathGame = MathGames.getInstance({
    wrapper: document.getElementById('math-game-wrapper'),
    debug: true
});

// Seleccionar una habilidad
mathGame.selectSkill({ pool_key: 'COMPLETE' });

// Evento cuando la habilidad está seleccionada
mathGame.on('SKILL_SELECTED', function () {
    mathGame.startSession();
});

// Evento cuando la sesión está lista
mathGame.on('SESSION_READY', function () {
    // Obtener una pregunta
    var question = mathGame.getQuestion();
    document.getElementById('math-game-wrapper').innerHTML = '<p>' + question.display + '</p>';
});

// Manejar la respuesta seleccionada
mathGame.on('QUESTION_ANSWERED', function (result) {
    if (result.correct) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. Intenta nuevamente.");
    }
});
