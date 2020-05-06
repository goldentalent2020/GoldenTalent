let servicio = document.getElementById("servicios");
let titulo_servicio = document.getElementById("servicios-1");
let texto_servicios = document.getElementById("servicios-2");
let elementos_servicios = document.getElementsByClassName("servicios-item");

let nosotros = this.document.getElementById("nosotros");
let titulo_nosotros = this.document.getElementById("nosotros-1");
let imagen_nosotros = this.document.getElementById("nosotros-2");
let texto_nosotros = this.document.getElementById("nosotros-3");

let ayudar = document.getElementById("ayudar");
let titulo_ayudar= document.getElementById("animation-momento-1");
let texto_ayudar= document.getElementById("animation-momento-2");
let elementos_ayudar = document.getElementsByClassName("es-momento-item");

let contacto = document.getElementById("contacto");
let elementos_contacto = document.getElementsByClassName("contacto-item");

window.addEventListener('scroll', function () {

    let posNosotros = nosotros.getBoundingClientRect().top;
    let posServicios = servicio.getBoundingClientRect().top;
    let posAyudar = ayudar.getBoundingClientRect().top;
    let posContacto = contacto.getBoundingClientRect().top;

    this.console.log(posNosotros);
    if(window.screen.width >902){
        if (posNosotros < 300 && posNosotros > -485) {
            titulo_nosotros.style.opacity = "1";
            titulo_nosotros.style.top = "0";
            this.setTimeout(function () {
                imagen_nosotros.style.top = "0";
                imagen_nosotros.style.opacity = "1";
            }, 300);
            this.setTimeout(function () {
                texto_nosotros.style.top = "0";
                texto_nosotros.style.opacity = "1";
            }, 900)
        }
        if (posServicios < 300 && posServicios > -750) {
            titulo_servicio.style.top = "0";
            texto_servicios.style.top = "0";
    
            titulo_servicio.style.opacity = "1";
            texto_servicios.style.opacity = "1";
    
            timer = 600;
    
            Array.prototype.forEach.call(elementos_servicios, function (el) {
    
                setTimeout(function () {
                    el.style.opacity = "1";
                    el.style.top = "0";
                }, timer);
                timer += 200;
    
            })
        }
        if (posAyudar < 300 && posAyudar > -1250) {
            titulo_ayudar.style.top = "0px";
            titulo_ayudar.style.opacity = "1";
    
            setTimeout(function(){                
                texto_ayudar.style.top = "0px";
                texto_ayudar.style.opacity = "1";
            },600);
    
            timer = 900;
    
            Array.prototype.forEach.call(elementos_ayudar,function(el){
                setTimeout(function(){
                    el.style.opacity = "1";
                    el.style.top = "0";
                },timer);
                timer += 200;
            })
        }
        if (posContacto < 300 && posContacto > -750) {
    
            timer = 0;
    
            Array.prototype.forEach.call(elementos_contacto,function(el){
                setTimeout(function(){
                    el.style.opacity = "1";
                    el.style.top = "0";
                },timer);
                timer += 200;
            })
        }
    } 




        if(window.screen.width <901 && window.screen.width >554){
            if (posNosotros < 500 && posNosotros > -1000) {                
                titulo_nosotros.style.opacity = "1";
                titulo_nosotros.style.top = "0";
                this.setTimeout(function () {
                    imagen_nosotros.style.top = "0";
                    imagen_nosotros.style.opacity = "1";
                }, 300);
                this.setTimeout(function () {
                    texto_nosotros.style.top = "0";
                    texto_nosotros.style.opacity = "1";
                }, 900)
            }

            if (posServicios < 300 && posServicios > -500) {
                titulo_servicio.style.top = "0";
                texto_servicios.style.top = "0";
        
                titulo_servicio.style.opacity = "1";
                texto_servicios.style.opacity = "1";
        
                timer = 600;
        
                Array.prototype.forEach.call(elementos_servicios, function (el) {
        
                    setTimeout(function () {
                        el.style.opacity = "1";
                        el.style.top = "0";
                    }, timer);
                    timer += 200;
        
                })
            } 

            if (posAyudar < 300 && posAyudar > -2050) {
                titulo_ayudar.style.top = "0px";
                titulo_ayudar.style.opacity = "1";
        
                setTimeout(function(){                
                    texto_ayudar.style.top = "0px";
                    texto_ayudar.style.opacity = "1";
                },600);
        
                timer = 900;
        
                Array.prototype.forEach.call(elementos_ayudar,function(el){
                    setTimeout(function(){
                        el.style.opacity = "1";
                        el.style.top = "0";
                    },timer);
                    timer += 200;
                })
            }

            if (posContacto < 300 && posContacto > -750) {
    
                timer = 0;
        
                Array.prototype.forEach.call(elementos_contacto,function(el){
                    setTimeout(function(){
                        el.style.opacity = "1";
                        el.style.top = "0";
                    },timer);
                    timer += 200;
                })
            }
        
        }
    
});

(function () {
    if (document.getElementById("nosotros").getBoundingClientRect().top < 350) {
        titulo_nosotros.style.opacity = "1";
        titulo_nosotros.style.top = "0";
    }

    let posNosotros = document.getElementById("ayudar").getBoundingClientRect().top;
        console.log("posAyudar: " + posNosotros)
})();