// Crear una Promesa que realiza una solicitud HTTP
const solicitudHTTP = new Promise((resolve, reject) => {
    // Simular una solicitud HTTP (reemplaza con tu URL real)
    setTimeout(() => {
        // Supongamos que hemos recibido una respuesta exitosa
        const respuestaDelServidor = { mensaje: 'Datos recibidos correctamente' };
        resolve(respuestaDelServidor); // Resolvemos la Promesa con los datos
    }, 2000); // Simulamos un retraso de 2 segundos
});

// Realizar una acción cuando la Promesa se resuelva (éxito)
solicitudHTTP.then(respuesta => {
    console.log('Éxito:', respuesta);
}).catch(error => {
    console.error('Error:', error);
});
