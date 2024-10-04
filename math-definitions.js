// Definiciones importantes
var definitions = {
    "multiplicacionMonomios": "Para multiplicar monomios, multiplicamos los coeficientes y sumamos los exponentes de las mismas variables.",
    "distributiva": "La propiedad distributiva indica que \\(a(b + c) = ab + ac\\), es decir, multiplicamos cada término del primer factor por cada término del segundo factor.",
};

// Función para mostrar la definición al estudiante
function showDefinition(id, definitionText) {
    var element = document.getElementById(id);
    element.innerHTML = definitionText;
    element.classList.remove("hidden");
}
