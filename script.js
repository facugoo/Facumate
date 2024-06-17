function calcular() {
    var inputFunction = document.getElementById("input-function").value.trim();
    var parts = inputFunction.split("x");

    if (parts.length !== 2 || parts[1].length === 0) {
        alert("Por favor, ingrese una función lineal válida en el formato ax+b");
        return;
    }

    var a = parseFloat(parts[0]);
    var b = parseFloat(parts[1]);

    if (isNaN(a) || isNaN(b)) {
        alert("Por favor, ingrese una función lineal válida en el formato ax+b");
        return;
    }

    var root = "Raíz: " + (-b / a);
    var yIntercept = "Ordenada al Origen: " + b;
    var slope = "Pendiente: " + a;
    var direction = a > 0 ? "Creciente" : "Decreciente";

    document.getElementById("output-root").innerText = root;
    document.getElementById("output-y-intercept").innerText = yIntercept;
    document.getElementById("output-slope").innerText = slope;
    document.getElementById("output-direction").innerText = "Dirección: " + direction;
}

document.getElementById("input-function").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        calcular();
    }
});
