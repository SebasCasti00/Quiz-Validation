
var nombre = document.querySelector(".title");
var btnVal = document.getElementById("validar");
var ocultar = document.getElementById("entrada");
var image = document.getElementById("image");
var respuesta = document.form1.text1;
var soluciones = ["Ne","F","P","O","N","C","S","Cl","Al","Cu","Au","Ag","He","",
"10","9","15","8","7","6","16","17","13","29","79","47","2","Final"];
var nombres = ["Neón","Flúor","Fósforo","Oxígeno","Nitrógeno","Carbono","Azufre","Cloro","Aluminio","Cobre","Oro","Plata","Helio","Nivel",
"Neón","Flúor","Fósforo","Oxígeno","Nitrógeno","Carbono","Azufre","Cloro","Aluminio","Cobre","Oro","Plata","Helio","Final"];
var pos = 0;
//add.onClickListener = sodioValidar(document.form1.text1); 
nombre.innerHTML = nombres[pos];
console.log(soluciones);

console.log(nombres);

btnVal.addEventListener('click', sodioValidar);
function sodioValidar( ){ 
      nombre.innerHTML = nombres[pos];
      switch (nombres[pos]) {

            case "Neón":
            
                  console.log(pos);
                  if(respuesta.value.match(soluciones[pos])){
                        
                        nombre.innerHTML = nombres[pos+1];
                        document.getElementById("image").src = './images/Flúor.png';
                        pos += 1;
                        console.log(pos);
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Flúor":
                  console.log(pos);
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Fósforo.png';
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Fósforo":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Oxígeno.png';
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Oxígeno":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Nitrogeno.png';
      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;
      
            case "Nitrógeno":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Carbono.png';
      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Carbono":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Azufre.png';

                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Azufre":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Cloro.png';
      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Cloro":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Aluminio.png';
                        
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Aluminio":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Cobre.png';
      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Cobre":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Oro.png';
      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Oro":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Plata.png';
      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Plata":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/Helio.png';      
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Helio":
            
                  if(respuesta.value.match(soluciones[pos])){
                        document.getElementById("image").src = './images/win1.png';

      
                        document.getElementById("entrada").style.display = "none";
                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        respuesta.value = "";
                        //alert('¡Muy bien! La que sigue :D');
                  }else{
            
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Nivel":
                  document.getElementById("image").src = './images/Neón.png';      
                  document.getElementById("entrada").style.display = "inline-block";
                  nombre.innerHTML = nombres[pos+1];
                  pos += 1;
                  respuesta.value = "";
            break;

            case "Final":

            break;
      }
      
}