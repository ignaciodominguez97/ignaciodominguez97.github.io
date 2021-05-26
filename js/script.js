var forma = document.getElementById("forma"),
    boleta = forma["boleta"],
    nombre = forma["nombre"],
    grupo = forma["grupo"],
    materia =forma["materia"],
    fecha = forma["fecha"],
    salida = document.getElementById("salidaInfo");
    var data=new Array();

function procesa(){
 salida.innerHTML=`La boleta del alumno es: ${boleta.value}, 
 <br>El nombre del alumno es: ${nombre.value}, 
 <br>su grupo es ${grupo.value}, 
 <br>Ingreso la meteria ${materia.value}, 
 <br>la fecha que ingreso ${fecha.value}`
}