let hideMenu = false; //bandera
let ubicacionInicial = window.pageYOffset;
let servicios = document.getElementsByClassName("servicios-item");
let apoyar = document.getElementsByClassName("container-item");
let timer ;

function showMenu(){    
    if(hideMenu){
        document.getElementById("mobile-menu").style.height = "0px";
        document.getElementById("mobile-menu").style.boxShadow = "0px 10px 10px rgba(0,0,0,0)";        
        document.getElementById("navbar").style.boxShadow = "0px 10px 10px rgba(0,0,0,.1)";
        hideMenu = false;
    }else{
        document.getElementById("mobile-menu").style.height = "260px";
        document.getElementById("mobile-menu").style.boxShadow = "0px 10px 10px rgba(0,0,0,.1)";
        document.getElementById("navbar").style.boxShadow = "0px 10px 10px rgba(0,0,0,0)";
        hideMenu = true;
    }
}


window.onscroll = function(){
    let desplazamiento = window.pageYOffset;
   
    this.console.log(desplazamiento)

    if(ubicacionInicial >= desplazamiento){
        document.getElementById("navbar").style.top = '0';
        if(this.screen.width <= 900){
            document.getElementById("mobile-menu").style.top = '80px';
        }else{
            document.getElementById("mobile-menu").style.top = '120px';
        }
        
    }else{
        document.getElementById("navbar").style.top = '-150px';
        document.getElementById("mobile-menu").style.top = '-150px';
        if(hideMenu){
            this.showMenu();
        }    
    }

    ubicacionInicial = desplazamiento;
}


function hideNavbar()
{
    if(hideMenu){
        this.showMenu();
    }
    document.getElementById("mobile-menu").style.top = '-150px';
    setTimeout(function(){ 
        document.getElementById("navbar").style.top = "-150px";       
    },650);
}

(function(){
    let navbar_anim_1 = document.getElementsByClassName("menu-animation-1");
    let navbar_anim_2 = document.getElementsByClassName("menu-animation-2");

    Array.prototype.forEach.call(navbar_anim_1,function(el){
        setTimeout(function(){
            el.style.opacity = "1";
            el.style.paddingTop = "0"; 
        },300);
    });

    Array.prototype.forEach.call(navbar_anim_2,function(el){
        setTimeout(function(){
            el.style.opacity = "1";
            el.style.paddingBottom = "0"; 
        },600);
    });

    setTimeout(function(){
        document.getElementById("logo-animation").style.opacity = "1";
        document.getElementById("logo-animation").style.left = "0";
    },900)

    setTimeout(function(){
        document.getElementById("hamburguer-animation").style.opacity = "1";
        document.getElementById("hamburguer-animation").style.right = "0";
    },300)

    setTimeout(function(){
        document.getElementById("animation-landing-1").style.opacity = "1";
        document.getElementById("animation-landing-1").style.top = "0";
    },600)

    
    setTimeout(function(){
        document.getElementById("animation-landing-2").style.opacity = "1";
        document.getElementById("animation-landing-2").style.top = "0";
    },900)

    
    setTimeout(function(){
        document.getElementById("animation-landing-3").style.opacity = "1";
        document.getElementById("animation-landing-3").style.right = "0";
    },1200)
})();