const cadena=document.getElementById('cadena');
const formulario=document.getElementById('formularioCad');
const resultadodiv=document.getElementById('resultado');
var stringrev=cadena.value;

function revertir(stringrev) {
    let cambio=stringrev.split("");
    return cambio.reverse().join("");
}
var cambios=revertir(stringrev);
console.log(typeof cambios);

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    resultadodiv.innerText=cambios;
           })