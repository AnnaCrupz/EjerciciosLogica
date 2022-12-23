const numeroF=document.getElementById('numeroF');
const formulario=document.getElementById('formularioF');
const resultadodiv=document.getElementById('resultado');
const numeroFValor=parseInt(numeroF.value)
const tipo= typeof numeroFValor;


formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (tipo ==='number' && !isNaN(numeroFValor)) {
        var fac=numeroFValor;
        for (let index = 1; index < numeroFValor; index++) {
            fac*=index;
        }
        resultadodiv.innerText= fac;
    
    } else{
        resultadodiv.innerText="No es un numero";

    }
           })