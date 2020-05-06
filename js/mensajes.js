function enviarMensaje(){
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("mail").value;
    let mensaje = document.getElementById("mensaje").value;

    if(nombre.length == 0){
        document.getElementById("nombre").style.border = "1px solid red";
        document.getElementById("labelNombre").innerHTML = "El nombre es obligatorio"
        document.getElementById("labelNombre").style.color = "red";
    }else if(telefono.length == 0){
        document.getElementById("telefono").style.border = "1px solid red";
        document.getElementById("labelTelefono").innerHTML = "El telefono es obligatorio"
        document.getElementById("labelTelefono").style.color = "red";
    }else if(correo.length == 0){
        document.getElementById("mail").style.border = "1px solid red";
        document.getElementById("labelMail").innerHTML = "El correo es obligatorio"
        document.getElementById("labelMail").style.color = "red";
    }else if(mensaje == 0){
        document.getElementById("mensaje").style.border = "1px solid green";
        document.getElementById("labelMensaje").innerHTML = "Si el mensaje por default te gusta, por favor vuelve a presionar enviar."
        document.getElementById("labelMensaje").style.color = "green";
        document.getElementById("mensaje").value = "Buenos dias, me gustaria mas información de una vacante que estan ofertando.";
    }else{
        location.href = "https://wa.me/5214777553119?text=nombre:"+nombre+"%0Atelefono: "+telefono+"%0Aemail: "+correo+"%0Amensaje: "+mensaje;
    }
}


function validaNombre(){
    let nombre = document.getElementById("nombre").value;
    let expresion_regular = new RegExp("^[A-Z][a-z]{3,}( [A-Z][a-z]{2,}){2,} *$")
    if(expresion_regular.test(nombre)){
        document.getElementById("labelNombre").innerHTML ="El nombre ingresado es correcto";
        document.getElementById("nombre").style.color ="green";
        document.getElementById("nombre").style.border = "1px solid green";
        document.getElementById("labelNombre").style.color = "green";
    }else{
        document.getElementById("labelNombre").innerHTML ="El nombre ingresado es incorrecto, asegurate de ingresar el nombre correctamente con la primer letra en mayúscula, además de tus apellidos";
        document.getElementById("nombre").style.color ="red";
        document.getElementById("nombre").style.border = "1px solid red";
        document.getElementById("labelNombre").style.color = "red";
    }
}

function validaNumero(){
    
    let numero = document.getElementById("telefono").value;
    let expresion_numero = new RegExp("^[0-9]{10}$")

    
    
    if(expresion_numero.test(numero)){ 
        document.getElementById("labelTelefono").innerHTML = "El numero ingresado es correcto";
        document.getElementById("telefono").style.color ="green";
        document.getElementById("telefono").style.border = "1px solid green";
        document.getElementById("labelTelefono").style.color = "green";
    }else{
        document.getElementById("labelTelefono").innerHTML ="El numero ingresado debe de ser a 10 dígitos y debe contener únicamente números";
        document.getElementById("telefono").style.color ="red";
        document.getElementById("telefono").style.border = "1px solid red";
        document.getElementById("labelTelefono").style.color = "red";
    }
}

function validaCorreo(){
    let correo = document.getElementById("mail").value;
    let expresion_correo = new RegExp("^[a-zA-z\._]*@[a-z]{2,}(\.[a-z]{2,})+$");

    if(expresion_correo.test(correo)){ 
        document.getElementById("labelMail").innerHTML = "El correo ingresado es correcto";
        document.getElementById("mail").style.color ="green";
        document.getElementById("mail").style.border = "1px solid green";
        document.getElementById("labelMail").style.color = "green";
    }else{
        document.getElementById("labelMail").innerHTML ="El numero ingresado debe de ser a 10 dígitos y debe contener únicamente números";
        document.getElementById("mail").style.color ="red";
        document.getElementById("mail").style.border = "1px solid red";
        document.getElementById("labelMail").style.color = "red";
    }
}