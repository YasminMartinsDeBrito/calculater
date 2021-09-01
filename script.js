
// CHAMANDO O FORMULARIO E OS IDS DAS ENTRADAS E SAIDA 
const form = document.querySelector('form');
const hipotenusa1 = document.querySelector('#hipotenusa');
const cat = document.querySelector('#ca');
const cot = document.querySelector('#co');

    
//FUNCAO QUE CALCULA A HIPOTENUSA
function calculandoElementos(){
    const co = cot.value;
    const ca = cat.value;
    //CRIANDO CONDICAO
    if(!co){
        alert('Digite o valor do Cateto Oposto');
    }else if(!ca){
        alert('Digite o valor do Cateto Adjacente');
    }else if(ca <= 0 || co <= 0){
        alert('Digite um número MAIOR do que 0');
    }else{
        hipotenusa1.value = Math.hypot(ca,co).toFixed(2);
    }
}

    // CRIANDO UM EVENTO DE SUBMIT DO FORMULARIO
    form.addEventListener('submit',function(event){
        event.preventDefault();
        calculandoElementos();
    });
