let amigo = [];
console.log(amigo);

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo.trim() ==='') {
        alert('Ingrese un nombre válido');
       } else {
        amigo.push(nombreAmigo);
        document.querySelector('#amigo').value ='';
        mostrarlistaAmigos();
        
    }
}

//mostramos la lista de amigos
function mostrarlistaAmigos(){
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML ='';
    
    for (let index = 0; index <amigo.length; index++) {
        const element = amigo[index];

        let listaHtml = document.createElement('li');
        listaHtml.textContent = element;
        listaAmigos.appendChild(listaHtml);
    };
}

//realizar el sorteo del amigo secreto
function sortearAmigo () {
    let cantidadAmigos = amigo.length;
    if (cantidadAmigos === 0) {
        alert('Ingrese varios nombres para empezar el sorteo.');
    } else{
        let indiceAmigo = Math.floor(Math.random()*cantidadAmigos);
        let resultadoHtml = document.querySelector('#resultado');
        resultadoHtml.innerHTML = amigo[indiceAmigo];
        return;
    }
}