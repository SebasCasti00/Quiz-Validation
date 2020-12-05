
var nombre = document.querySelector(".title");
var btnVal = document.getElementById("validar");
var ocultar = document.getElementById("entrada");
var image = document.getElementById("image");
var textRecom = document.getElementById("recom");
var respuesta = document.form1.text1;
var puntaje = 200;
var pos = 0;
//var soluciones = ["Ne", "Final"]; --Test
//var nombres = ["Neón", "Final"]; --Test
var soluciones = ["Ne","F","P","O","N","C","S","Cl","Al","Cu","Au","Ag","He","",
"10","9","15","8","7","6","16","17","13","29","79","47","2","Final"];
var nombres = ["Neón","Flúor","Fósforo","Oxígeno","Nitrógeno","Carbono","Azufre","Cloro","Aluminio","Cobre","Oro","Plata","Helio","Nivel",
"Neón","Flúor","Fósforo","Oxígeno","Nitrógeno","Carbono","Azufre","Cloro","Aluminio","Cobre","Oro","Plata","Helio","Final"];
//No mover la línea de abajo antes de los arreglos, saldrá error de indefinido
nombre.innerHTML = nombres[pos];

console.log(soluciones);
console.log(nombres);

//Evento de evaluar al dar click
btnVal.addEventListener('click', sodioValidar);
function sodioValidar( ){ 
      nombre.innerHTML = nombres[pos];
      switch (nombres[pos]) {

            case "Neón":
            
                  console.log(pos);
                  if(respuesta.value.match(soluciones[pos])){
                        
                        //cambiar a nombre siguiente
                        nombre.innerHTML = nombres[pos+1];
                        //cambiar la imagen al siguiente elemento
                        document.getElementById("image").src = './images/Flúor.png';
                        //Cambiar a la siguiente posición del arreglo
                        pos += 1;
                        console.log(pos);
                        //Vaciar el valor del input para no tener que borrar y escribir
                        respuesta.value = "";
                        console.log(puntaje);
                  }else{
                        //Por cada error quitar 10 puntos
                        puntaje -= 10;
                        console.log(puntaje);
                  }
            break;

            case "Flúor":
                  console.log(pos);
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Fósforo.png';
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        console.log(puntaje);

                  }else{
                        puntaje -= 10;
                        console.log(puntaje);
                  }
            break;

            case "Fósforo":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Oxígeno.png';
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        console.log(puntaje);
                  }else{
                        puntaje -= 10;
                        console.log(puntaje);
                  }
            break;

            case "Oxígeno":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Nitrogeno.png';
                        console.log(puntaje);
      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                  }else{
                        puntaje -= 10;
                        console.log(puntaje);

                  }
            break;
      
            case "Nitrógeno":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Carbono.png';
      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                  }else{
                        puntaje -= 10;
                        console.log(puntaje);
                  }
            break;

            case "Carbono":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Azufre.png';

                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                  }else{
                        puntaje -= 10;
                        console.log(puntaje);
                  }
            break;

            case "Azufre":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Cloro.png';
      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                  }else{
                        puntaje -= 10;
                        console.log(puntaje);
                  }
            break;

            case "Cloro":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Aluminio.png';
                        
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                  }else{
                        puntaje -= 10;
                        console.log(puntaje);
                  }
            break;

            case "Aluminio":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Cobre.png';
      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                  }else{
                        puntaje -= 10;
                        console.log(puntaje);
                  }
            break;

            case "Cobre":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Oro.png';
      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                  }else{
                        puntaje -= 10;
                        console.log(puntaje);
                  }
            break;

            case "Oro":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Plata.png';
      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                  }else{
                        puntaje -= 10;
                        console.log(puntaje);
                  }
            break;

            case "Plata":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Helio.png';      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                  }else{
                        puntaje -= 10;
                        console.log(puntaje);
                  }
            break;

            case "Helio":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/win1.png';

                        //Cambiar texto para el nivel 2 de abreviación a número atómico
                        document.getElementById("recom").innerHTML = "Ahora ingresa el número atómico del elemento químico mostrado arriba."
                        //Ocultar entrada de texto
                        document.getElementById("entrada").style.display = "none";
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                  }else{
                        puntaje -= 10;
                        console.log(puntaje);
                  }
            break;

            case "Nivel":
                  document.getElementById("image").src = './images/Neón.png';  

                  //Mostrar la entrada de texto oculta    
                  document.getElementById("entrada").style.display = "inline-block";
                  nombre.innerHTML = nombres[pos+1];
                  pos += 1;
                  respuesta.value = "";
            break;

            case "Final":
                  //Cambiar el nombre de elementos químicos a texto de puntaje
                  nombre.innerHTML = "Tu puntaje fue de:";

                  //Hacer que se vea de mayor tamaño
                  textRecom.style.fontSize = 40;

                  //Alinear al centro, de lo contrario aparece hacia la izquierda
                  textRecom.style.textAlign = "center";

                  //Ocultar imagen
                  document.getElementById("image").style.display = "none";

                  //Mostrar puntaje
                  textRecom.innerHTML = puntaje;
            break;
      }
      
}