$(document).ready(function(){
$("#contador").click(function(){
    let funcion= $("#contador").val();
    if(funcion== "Ver nº de enlaces"){
       let enlace= $("a");
       $("#mostrar").val(enlace.length);
        $("#contador").val("Ver nº de parrafos")
    } else{
        let parrafo=$("p");
        $("#mostrar").val(parrafo.length);
           $("#contador").val("Ver nº de enlaces")
    }

   });
   });
