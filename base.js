function suma(a,b){
    if(arguments.length<2){
        console.log("Hacen falta dos argumentos como mínimo.")
    } else {
        var result =0;
        for (var i=0; i<arguments.length;i++){
            result += arguments[i];
        }
        return result;
    console.log(result);
    }
}
// TODO: Anadirle la parte que verifica que el valor de entrada no es un numero.
suma(2,2,2,2,2);
suma(2,2);
suma(18,2,4);