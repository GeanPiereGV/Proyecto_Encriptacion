document.addEventListener('DOMContentLoaded', function(){

     //Seleccionar elementos
     const btnEncriptar = document.querySelector('#btn-encriptar');
     const btnDesencriptar = document.querySelector('#btn-desencriptar');
     const btnCopiar = document.querySelector('#btn-copiar');
     const texto = document.querySelector('.texto-encriptado')
     

     btnEncriptar.addEventListener('click', encriptar);
     btnDesencriptar.addEventListener('click', desencriptar);
     btnCopiar.addEventListener('click', copiar);

     function encriptar(){
        let inputTexto = document.querySelector("#texto").value;
        inputTexto = inputTexto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        document.querySelector("#encriptado").value = inputTexto; 
        
     }

     function desencriptar(){
        let inputTexto = document.querySelector("#texto").value;
        inputTexto = inputTexto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        document.querySelector("#encriptado").value = inputTexto;
      
     }

     function copiar() {
        const texto = document.querySelector("#encriptado").value;
        if(texto == ""){
            alert('No se ha copiado nada');
        }else{
            navigator.clipboard.writeText(texto);
            alert('Se ha copiado al portapapeles');
        }
       
    }

});
