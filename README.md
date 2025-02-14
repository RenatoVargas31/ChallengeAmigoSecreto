# Amigo Secreto
Este proyecto es una aplicación web simple para sortear un "amigo secreto" entre una lista de amigos ingresados por el usuario. El objetivo principal de este desafío es fortalecer tus habilidades en lógica de programación.
## Archivos

- **app.js**: Contiene la lógica principal de la aplicación.
- **assets/**: Carpeta que contiene las imágenes utilizadas en la aplicación.
- **index.html**: Archivo HTML principal que estructura la página web.
- **style.css**: Archivo CSS que define los estilos de la aplicación.

## Funcionalidades

### Agregar Amigo

Permite al usuario agregar nombres de amigos a una lista.

```javascript
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo === '') {
        alert('Debes ingresar un nombre');
        return;
    } else {
        amigos.push(amigo);
        actualizarLista();
    }
    document.getElementById('amigo').value = '';
}
```
### Sortear Amigo

Permite al usuario sortear un amigo de la lista de amigos ingresados

```javascript
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista');
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = 'El amigo sorteado es: ' + amigoSorteado;
}
```
### Actualizar lista de Amigos

Actualiza la lista de amigos mostrada en la página.

```javascript
function actualizarLista() {
    let lista = '';
    amigos.forEach(amigo => {
        lista += `<li>${amigo}</li>`;
    });
    document.getElementById('listaAmigos').innerHTML = lista;
}
```
## Ejecución

1. Clona el repositorio o descarga los archivos.
2. Abre index.html en tu navegador web.

## Enlace

https://renatovargas31.github.io/ChallengeAmigoSecreto/
