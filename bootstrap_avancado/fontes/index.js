//variaveis
let flgBoot = false;

//evento DOM carregado
document.addEventListener('DOMContentLoaded', ()=>{
    try {
        console.log('DOM carregado - Bootstrap pronto');
        // carregado
        flgBoot = true;
   } catch (error) {
        flgBoot = false;
        console.log(error.message);
   }
});