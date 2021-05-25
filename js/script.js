"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
var FMT_ENTERO = "0,0",
    FMT_NUMERO = "0,0.00",
    FMT_MONEDA = "$0,0.00",
    FMT_PORCENTAJE = "0.00%";

var forma = document.getElementById("forma"),
        txtnumero = document.getElementById("numero"),
        txtsalidadatos = document.getElementById("salidadatos"),
        txtGenerar = document.getElementById("Generar"),
        txtLimpiar = document.getElementById("Limpiar");

txtGenerar.addEventListener('click',procesa,true);
txtLimpiar.addEventListener('click',limpiartext,true);

function procesa() {  
    var valor = txtnumero.value;
    var aux;
    var vecnum = [];
    for(var x=0,w=1;x<10;x++,w++)
    {
        if(x==0)
        {
            vecnum[x]=valor+" a la "+x+"=1";
            aux=1;
        }
        aux=aux*valor;
        vecnum[w]=valor+" a la "+w+"="+aux;
    }
    var resultadovec=vecnum.join("\n");
    txtsalidadatos.textContent = resultadovec;
     
 }
 
 function limpiartext(){
     txtsalidadatos.textContent = ""
 }