let arreglo=[];
let primos=[];
let compuestos=[];
let numeros=5;
alert("A continuación se te solicitarán"+numeros+ "numeros (Ingresa solo números, por favor)");
for (let index = 0; index < 5; index++) {
    const element = parseInt(prompt("Ingresa el numero #"+(index+1)+": "))
    const tipo= typeof element;
    if (tipo ==='number' && !isNaN(element)) {
    arreglo.push(element)
    } else{
        alert("Error, haz ingresado texto");
        break;
    }
}

arreglo.forEach(element => {
    let divisores=[];
    for (let j = 1; j <= element; j++) {
        
        if (element%j==0) {
            divisores.push(j);
        }
    }
    if (divisores[0]==1 && divisores[1]==element) {
        primos.push(element)
    } else if(element==1){
        compuestos.push(element);
    } 
    else {
        compuestos.push(element)}
    });

    console.log("Arreglo original: ");
    for (let c = 0; c < arreglo.length; c++) {
        console.log(c+"-"+arreglo[c]);
        
    }

    console.log("Numeros primos primero:");
    let contador=0

    while (contador<numeros) {
        if (contador<primos.length) {
            console.log(contador+"-"+primos[contador]);
            contador++;
            continue;
        } else{
            for (let a = 0; a < compuestos.length; a++) {
                console.log(contador+"-"+compuestos[contador-primos.length]);
                contador++;
                continue;
            }
        }
    }