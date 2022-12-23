//var num1=parseInt(prompt("Ingresa el primer numero: "));
//var num2=parseInt(prompt("Ingresa el segundo numero: "));
//var num3=parseInt(prompt("Ingresa el tercer numero: "));
var num1=4, num2=2, num3=4;
var mayor, medio,menor;
//const d=document;
//const cuadroResultados=d.getElementById('resultado');
//const elementos= document.createElement("div")
if (num1==num2 && num2==num3) {
    console.log("Los tres numeros son iguales");
    
} else{
    if (num1==num2) {
        if (num3>num2) {
            mayor=num3;
            medio=num2;
            menor=num1;
        } else{
            mayor=num1;
            medio=num2;
            menor=num3;
        }
    } else if (num1==num3) {
        if (num2>num3) {
            mayor=num2;
            medio=num3;
            menor=num1;
        } else{
            mayor=num3;
            medio=num1;
            menor=num2;
        }
    } else if(num2==num3){
        if (num3>num1) {
            mayor=num3;
            medio=num2;
            menor=num1;
        } else{
            mayor=num1;
            medio=num2;
            menor=num3;
        }
    } else{
        if (num1>num2 && num1>num3) {
            mayor=num1;
            if (num2>num3) {
                medio=num2;
                menor=num3;
            } else{
                medio=num3;
                menor=num2;
            }
        } else if (num2>num3 && num2>num1) {
                mayor=num2;
                if (num1>num3) {
                    medio=num1;
                    menor=num3;
                } else{
                    medio=num3;
                    menor=num1;
                }
        } else if (num3>num1 && num3>num2) {
            mayor=num3;
            if (num1>num2) {
                medio=num1;
                menor=num2;
            } else{
                medio=num2;
                menor=num1;
            }
    } else{
        console.log("Ocurrio un error");
    }
}
}

console.log(mayor,medio,menor);
console.log(menor,medio,mayor);
