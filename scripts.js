
var nombre = document.querySelector(".title");
var btnVal = document.getElementById("validar");
var ocultar = document.getElementById("entrada");
var respuesta = document.form1.text1;
var soluciones = ["Na", "Ne","F","P","O","N","C","S","Cl","Al","Cu","Au","Ag"];
var nombres = ["Sodio", "Neón","Flúor","Fósforo","Oxígeno","Nitrógeno","Carbono","Azufre","Cloro","Aluminio","Cobre","Oro","Plata","Nivel"];
var pos = 0;
//add.onClickListener = sodioValidar(document.form1.text1); 
nombre.innerHTML = nombres[pos];

btnVal.addEventListener('click', sodioValidar);
function sodioValidar( ){ 
      nombre.innerHTML = nombres[pos];
      switch (nombres[pos]) {
            case "Sodio":
                  if(respuesta.value.match(soluciones[pos])){ 

                        nombre.innerHTML = nombres[pos+1];
                        pos += 1;
                        //alert('¡Muy bien! La que sigue :D');
                        console.log("Como fue");
                        respuesta.value = "";
                  }else{
                        console.log(":c")
                        
                        //alert('Esa no es, intenta de nuevo :c');
                  }
            break;

            case "Neón":
            
                  console.log(pos);
                  if(respuesta.value.match(soluciones[pos])){
      
                        nombre.innerHTML = nombres[pos+1];
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

                  
                  nombre.innerHTML = nombres[pos+1];
                  pos += 1;
                  respuesta.value = "";
            break;
      }
      
}