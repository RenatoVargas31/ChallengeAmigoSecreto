// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){

    //Recibe el nombre de un amigo
    let amigo = document.getElementById('amigo').value;
    //Comprobar si el input está vacío
    if(amigo === ''){
        alert('Debes ingresar un nombre');
        return;
    }else{
        //Agregar el amigo a la lista de amigos
        amigos.push(amigo);
        //Actualizar la lista de amigos
        actualizarLista();
    }
    //Limpiar el input
    document.getElementById('amigo').value = '';
}
function sortearAmigo(){
    //Comprobar si hay amigos en la lista
    if(amigos.length === 0){
        alert('No hay amigos en la lista');
        return;
    }
    //Sortear un amigo
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    //Mostrar el amigo sorteado
    document.getElementById('resultado').innerHTML = 'El amigo sorteado es: ' + amigoSorteado;
}
function actualizarLista(){
    //Recorrer la lista de amigos
    let lista = '';
    amigos.forEach(amigo => {
        lista += `<li>${amigo}</li>`;
    });
    //Mostrar la lista de amigos
    document.getElementById('listaAmigos').innerHTML = lista;
}