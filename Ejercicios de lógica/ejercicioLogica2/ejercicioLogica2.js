const grados=document.getElementById('gradosC');
const resultadobtn=document.getElementById('formularioT');
const resultadodiv=document.getElementById('resultado');
const gradosValor=parseInt(grados.value)
const tipo= typeof gradosValor;
var far, kel;

resultadobtn.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (typeof gradosValor ==='number' && !isNaN(gradosValor)) {
        far=(gradosValor*(9/5))+32;
        kel=gradosValor+273.15;
        resultadodiv.innerText="Grados Kelvin: "+kel+ " Grados Farenheit: "+far;

    } else{
        resultadodiv.innerText="No es un numero";

    }
           })