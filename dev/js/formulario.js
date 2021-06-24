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