const numeroFib=document.getElementById('numeroFib');
const formulario=document.getElementById('formularioFib');
const resultadodiv=document.getElementById('resultado');
const numeroFValor=parseInt(numeroFib.value)
const tipo= typeof numeroFValor;


formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (typeof numeroFValor ==='number' && !isNaN(numeroFValor)) {
        var fibonacci=[0,1];
        for (let index = 2; index < numeroFValor; index++){
            fibonacci.push(fibonacci[index-1]+fibonacci[index-2]);
        }
        resultadodiv.innerText=fibonacci;
        console.log(fibonacci);
    } else{
        resultadodiv.innerText="No es un numero";

    }
           })