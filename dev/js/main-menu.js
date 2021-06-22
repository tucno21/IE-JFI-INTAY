document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    comprobarDNI();
    comprobarNOMBRE();
}

const toggleMenu = document.getElementById('menu-toggle');
const topMenu = document.getElementById('top-menu');


toggleMenu.addEventListener('click', () => {
    topMenu.classList.toggle('activador');
});

///slider

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 7000);


let thumbnails = document.getElementsByClassName('ventas-slider__thumbnail')
let activeImages = document.getElementsByClassName('ventas-slider__active')

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function () {
        console.log(activeImages)
        if (activeImages.length > 0) {
            activeImages[0].classList.remove('ventas-slider__active')
        }
        this.classList.add('ventas-slider__active')
        document.getElementById('visor-img').src = this.src
    })
}

//VALIDACION DE FORMULACION DE ESTUDIANTES DE
function comprobarDNI() {
    let validarDNI = document.getElementById("numeroDNI");
    let errorMsg = document.getElementById("error-msg1");

    validarDNI.addEventListener('input', () => {
        if (validarDNI.value.length === 8) {
            errorMsg.style.visibility = 'hidden';
            validarDNI.style.border = '2px solid #ffffff';
        } else {
            errorMsg.style.visibility = 'visible';
            validarDNI.style.border = '2px solid #d60f0f';
        }

        // console.log('LOCO');
    });
};

function comprobarNOMBRE() {
    let nombremayu = document.getElementById("nombremayu");
    let errorMsg = document.getElementById("error-msg2");
    let mayuscula = /^[A-ZÑ\s]+$/

    nombremayu.addEventListener('input', () => {
        if (nombremayu.value.length > 3 && nombremayu.value == nombremayu.value.match(mayuscula)) {
            errorMsg.style.visibility = 'hidden';
            nombremayu.style.border = '2px solid #ffffff';
        } else {
            errorMsg.style.visibility = 'visible';
            nombremayu.style.border = '2px solid #d60f0f';
        }

        // console.log(e.target.value.length);
    });
}