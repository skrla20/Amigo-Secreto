let titulo = document.querySelector('h1');
titulo.innerHTML = '';

let nombre = [];
console.log(nombre);

function agregarAmigos(nombre) {
    if (nombre && nombre.trim() !=='') {
        nombre.push(nombre.trim());
        listaAmigos();
        document.getElementById('nombre').value ='';
    } else {
        alert('Ingrese un nombre válido');
    }
}

function listaAmigos(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML =''; //limpia la lista actual
    nombre.forEach(nombre =>{
        const listItem = document.createElement('li');
        listItem.textContent = nombre;
        lista.appendChild(listItem);
    });
}

function sortearAmigo () {
    if (nombre.length <2) {
        alert('Se neceesitan más nombres para sortear.');
        return;
    }

    const sorteo = {};
    const shuffledNombre = [...nombre].sort(() => Math.random() -0.5);

    for (let i = 0; i<nombre,length; i++) {
        let asignado = false;
        let intento = 0;
        while (!asignado && intento <5) {
            let posibleAsignado = shuffledNombre[i];

            if (nombre[i] !== posibleAsignado){
                sorteo[nombre[i]] = posibleAsignado;
                shuffledNombre.splice(shuffledNombre.indexOf(posibleAsignado), 1);
                asignado = true;
            } else {
                intento++;
                shuffledNombre.sort(()=> Math.random() - 0.5);
            }
        }
        if (!asignado) {
            alert ('No se puede hacer el sorteo. Intente de nuevo');
            return;
        }
    }

    mostrarResultado(sorteo);
}

function mostrarResultado(sorteo) {
    const resultadosDiv = document.getElementById('resultado');
    resultadosDiv.innerHTML ='';
    for(const nombre in sorteo) {
        const resultadoItem = document.createElement('p');
        resultadoItem.textContent = `${nombre} su amigo secreto es ${sorteo(nombre)}`;
        resultadosDiv.appendChild(resultadoItem);
    }
}