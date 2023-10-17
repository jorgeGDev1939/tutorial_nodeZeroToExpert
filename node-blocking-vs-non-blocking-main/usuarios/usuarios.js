// Definición de una función que simula una consulta síncrona a la base de datos.
const getUsuarioSync = (id) => {
    // Registra el tiempo inicial.
    const startPoint = new Date().getTime();
    // Espera durante 3000 milisegundos (3 segundos).
    while (new Date().getTime() - startPoint <= 3000) {
        // En una aplicación real, aquí podría haber una espera o consulta a una base de datos.
        // En este ejemplo, se está simulando una espera ficticia.
    }

    // Retorna un objeto que representa un usuario con un ID y un nombre.
    return {
        id,
        nombre: `Usuario ${id}`
    };
}

// Definición de una función que simula una consulta asincrónica a la base de datos utilizando un callback.
const getUsuario = (id, callback) =>{
    // Crea un objeto de usuario con el ID proporcionado.
    const usuario = {
        id,
        nombre: `Usuario ${id}`
    };

    // Después de 3000 milisegundos (3 segundos), se llama a la función de callback
    // pasándole el objeto de usuario como argumento.
    setTimeout(() => {
        callback(usuario);
    }, 3000);
}

// Exporta las dos funciones para su uso en otros archivos o módulos.
module.exports = {
    getUsuario,
    getUsuarioSync
}
