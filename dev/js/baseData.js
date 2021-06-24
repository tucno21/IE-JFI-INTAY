const API_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=xSs0jCVlVXwdNiRLBWI5FQnJWNq9QjPitIJsu4KUxZAMgs5Q8Nt4Rd0vQO3oA10V5RIbh-goLdTk4rP4X2EQjGoOF6RwKWxLm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAeTsqJq7ah762Qzfep4L5Pc0oru40cCwBguRPg3L6KsgE24PVR9w1-NIndZPJ9PzDOmbnRGq-tk&lib=MzNTjlbCJg-bab64mUnrHMn6hVd8pB1XF';

fetch(API_URL)
    .then(response => response.json())
    .then(db => {
        const directory = db.user;
        
        directory.forEach((docente)=>{
            const { id, name, area, celular } = docente;
            
            //ORDEN DE SECUENCIA
            const orden = document.createElement('P');
            orden.textContent = id;
            orden.classList.add('teaching-directory__orden');
            //NOMBRE
            const nombre = document.createElement('P');
            nombre.textContent = name;
            nombre.classList.add('teaching-directory__name');
            //area
            const areas = document.createElement('P');
            areas.textContent = area;
            areas.classList.add('teaching-directory__area');
            //CELULAR
            const phone = document.createElement('P');
            phone.textContent = celular;
            phone.classList.add('teaching-directory__phone');
            //llamada
            const call = document.createElement('P');
            call.classList.add('teaching-directory__call');
            const LinkCall = document.createElement('A');
            LinkCall.href = `tel:${celular}`
            const icon1 = document.createElement('I');
            icon1.classList.add('fas', 'fa-phone-volume');

            LinkCall.appendChild(icon1);
            call.appendChild(LinkCall);
            //whatsapp
            const whatsapp = document.createElement('P');
            whatsapp.classList.add('teaching-directory__whatsapp');
            const LinkWhatsapp = document.createElement('A');
            LinkWhatsapp.href = `https://wa.me/51${celular}`;
            LinkWhatsapp.target = "_blank";
            const iconw = document.createElement('I');
            iconw.classList.add('fab', 'fa-whatsapp-square');

            LinkWhatsapp.appendChild(iconw);
            whatsapp.appendChild(LinkWhatsapp);

            //contendor del directorioDocente
            const contenedorDIV = document.createElement('DIV');
            contenedorDIV.classList.add('teaching-directory');

            contenedorDIV.appendChild(orden);
            contenedorDIV.appendChild(nombre);
            contenedorDIV.appendChild(areas);
            contenedorDIV.appendChild(phone);
            contenedorDIV.appendChild(call);
            contenedorDIV.appendChild(whatsapp);


            document.querySelector('.teaching').appendChild(contenedorDIV);
            // console.log(contenedorDIV);
        })

    })
    .catch(err =>console.log(err));

