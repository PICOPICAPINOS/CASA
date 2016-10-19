function suma(a, b) {
    var result = 0;
    if (arguments.length < 2) {
        console.log("Hacen falta dos argumentos como mínimo.")
    } else {
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        console.log(result);
    }
}
// TODO: Anadirle la parte que verifica que el valor de entrada no es un numero.
suma(2,58);