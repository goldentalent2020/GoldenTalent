(function(){
    document.getElementById("item-2").style.opacity = "0";
    document.getElementById("item-2").style.right = "-100%";
    document.getElementById("item-1").style.right = "0";
    document.getElementById("next").style.opacity = "0";
    
})();

function left(){
    document.getElementById("item-1").style.opacity = "0";
    document.getElementById("item-1").style.right = "100%";
    document.getElementById("item-2").style.right = "0%";
    document.getElementById("item-2").style.opacity = "1";
    document.getElementById("next").style.opacity = "1";
    document.getElementById("prev").style.opacity = "0";
}

function right(){
    document.getElementById("item-1").style.opacity = "1";
    document.getElementById("item-1").style.right = "0%";
    document.getElementById("item-2").style.right = "-100%";
    document.getElementById("item-2").style.opacity = "0";
    document.getElementById("next").style.opacity = "0";
    document.getElementById("prev").style.opacity = "1";
}


/*Version mobile */

let desplazamientos = [400,300,200,100,0,-100,-200,-300,-400,-500];
let elementos = document.getElementsByClassName("mobile-carrousel-item");
let ubicador;

(function(){
    ubicador = 0;
    Array.prototype.forEach.call(elementos,function(el){
        el.style.right = desplazamientos[ubicador] + "%";
        if(desplazamientos[ubicador] == 0){
            el.style.opacity = 1;
        }else{
            el.style.opacity = 0;
        }
        ubicador++;
    });
})();


function mobileLeft(){
    for(let i = 0; i<10;i++){
        if(desplazamientos[i] == 400){
            desplazamientos[i] = -500;
        }else{
            desplazamientos[i]+=100;
        }                    
    }


    ubicador = 0;
    Array.prototype.forEach.call(elementos,function(el){
        
        if(desplazamientos[ubicador] == 0){
            el.style.opacity = 1;
        }else{
            el.style.opacity = 0;
        }
        el.style.right = desplazamientos[ubicador] + "%";
        
        ubicador++;
    });

}

function mobileRight(){
    for(let i = 0; i<10;i++){
        if(desplazamientos[i] == -500){
            desplazamientos[i] = 400;
        }else{
            desplazamientos[i]-=100;
        }                    
    }


    ubicador = 0;
    Array.prototype.forEach.call(elementos,function(el){
        el.style.right = desplazamientos[ubicador] + "%";
        if(desplazamientos[ubicador] == 0){
            el.style.opacity = 1;
        }else{
            el.style.opacity = 0;
        }
        ubicador++;
        
    });

}