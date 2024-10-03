// Crear la instancia de MathGames API
var mathGame = MathGames.getInstance({
    // Puedes agregar tu API key si tienes una, sino omite esta propiedad
    wrapper: document.getElementById('math-game-wrapper'),
    debug: true
});

// Seleccionar habilidad (es necesaria una pool_key)
mathGame.selectSkill({ pool_key: 'COMPLETE' });

// Evento cuando se selecciona una habilidad
mathGame.on('SKILL_SELECTED', function () {
    // Iniciar la sesión
    mathGame.startSession();
});

// Evento cuando la sesión está lista
mathGame.on('SESSION_READY', function () {
    // Obtener una pregunta
    var question = mathGame.getQuestion();
    document.getElementById('math-game-wrapper').innerHTML = '<p>' + question.display + '</p>';
});
