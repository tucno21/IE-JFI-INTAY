//base de datos del docentes

// async function baseDatos() {
//     try {
//         const resultado = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=xSs0jCVlVXwdNiRLBWI5FQnJWNq9QjPitIJsu4KUxZAMgs5Q8Nt4Rd0vQO3oA10V5RIbh-goLdTk4rP4X2EQjGoOF6RwKWxLm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAeTsqJq7ah762Qzfep4L5Pc0oru40cCwBguRPg3L6KsgE24PVR9w1-NIndZPJ9PzDOmbnRGq-tk&lib=MzNTjlbCJg-bab64mUnrHMn6hVd8pB1XF');

//         const db = await resultado.json();
//         const directorioDocentes = db.user;

//         // const teaching = document.querySelector('.teaching-directory-title');

//         directorioDocentes.forEach((docente) =>{
//             const { id, name, area, celular } = docente;

//             const nombre = document.createElement('P');
//             nombre.textContent = name;

//             document.querySelector('.pruebaextrama').appendChild(nombre);
//             // console.log(nombre);
//         })

//         // console.log(resultado);
//     } catch (error) {
//         console.log(error)
//     }
// }