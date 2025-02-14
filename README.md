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
Enlace: https://renatovargas31.github.io/ChallengeAmigoSecreto/
