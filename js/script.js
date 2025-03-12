import {ushuaia, buenosAires, marDelPlata, villaYacanto} from './destinos.js';

let destinos = document.querySelectorAll('li');

let titulo = document.getElementById('titulo');
let subtitulo = document.getElementById('subtitulo');
let parrafo = document.getElementById('parrafo');
let precio = document.getElementById('precio');

destinos.forEach(destino => {
    destino.addEventListener('click', function(){

        let contenido = obtenerInformacion(this.textContent);
        
        titulo.innerHTML = contenido.titulo;
        subtitulo.innerHTML = contenido.subtitulo;
        parrafo.innerHTML = contenido.parrafo;
        precio.innerHTML = contenido.precio;

    });
});

const obtenerInformacion = (destino) => {
    let informacionDestino = {
        "Ushuaia": ushuaia,
        "Buenos Aires": buenosAires,
        "Mar del Plata": marDelPlata,
        "Villa Yacanto": villaYacanto
    }
    return informacionDestino[destino];
}