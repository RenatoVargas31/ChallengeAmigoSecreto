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
        
        //Mostrar la lista de amigos uno debajo de otro
        document.getElementById('listaAmigos').innerHTML = amigos.join('<br>');
    
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
    document.getElementById('resultado').innerHTML = amigoSorteado;
    console.log(amigoSorteado);
}