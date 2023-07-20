


let boton_inicio = document.getElementById('boton_inicio');

boton_inicio.addEventListener('click',()=>{

    document.querySelectorAll('.seccion').forEach((unaSeccion)=>{
        unaSeccion.style.display = 'none'
    })

    document.getElementById('Seccion-Presentacion').style.display = 'flex'
    boton_inicio.style.display = "none"
})


// SECCION DE CUENTOS

let boton_cuentos = document.getElementById('boton_cuentos');


boton_cuentos.addEventListener('click',()=>{
    document.querySelectorAll('.seccion').forEach((unaSeccion)=>{
        unaSeccion.style.display = 'none'
    })

    document.getElementById('seccion-cuentos').style.display = 'flex'
    boton_inicio.style.display = "block"
})

let botones_cuentos =  document.querySelectorAll('#seccion-cuentos .boton-un-cuento')
let imagen_cuento = document.getElementById('imagen-de-presentacion-cuento');
let titulo_cuenta = document.getElementById('titulo-cuento');
let enlace_pdf = document.getElementById('boton-descarga-cuento')



botones_cuentos[0].addEventListener('click',()=>{
    imagen_cuento.style.backgroundImage = "url('Assets/Imagenes/Corazon\ Delator.jpg')"
    titulo_cuenta.innerText = "El corazon delator - Edgar Allan Poe"
    enlace_pdf.setAttribute('href',"Recursos para Scire/Libros/El corazon delator - Edgar Allan Poe.pdf")
})


botones_cuentos[1].addEventListener('click',()=>{
    imagen_cuento.style.backgroundImage = "url('Assets/Imagenes/El\ huevo.jpg')"
    titulo_cuenta.innerText = "El huevo - Andy Weir"
    enlace_pdf.setAttribute('href',"Recursos para Scire/Libros/El huevo - Andy Weir.pdf")

})


botones_cuentos[2].addEventListener('click',()=>{
    imagen_cuento.style.backgroundImage = "url('Assets/Imagenes/Un\ artista\ del\ ambre.jpg')"
    titulo_cuenta.innerText = "Un artista del hambre - Franz Kafka"
    enlace_pdf.setAttribute('href',"Recursos para Scire/Libros/Un artista del hambre - Franz Kafka.pdf")

})


botones_cuentos[3].addEventListener('click',()=>{
    imagen_cuento.style.backgroundImage = "url('Assets/Imagenes/El\ perro\ y\ su\ espejo.jpg')"
    titulo_cuenta.innerText = "El perro y su imagen"
    enlace_pdf.setAttribute('href',"Recursos para Scire/Libros/El perro y su imagen.pdf")
})
