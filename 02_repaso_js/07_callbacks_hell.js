const axios = require('axios');

function obtenerDatosDeUsuario(userId, callback) {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            const userData = response.data;
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                .then(response => {
                    const userPosts = response.data;
                    callback({ userData, userPosts });
                })
                .catch(error => {
                    callback(error);
                });
        })
        .catch(error => {
            callback(error);
        });
}

obtenerDatosDeUsuario(1, data => {
    if (data instanceof Error) {
        console.error('Error:', data.message);
    } else {
        console.log('Datos de usuario y publicaciones:', data);
    }
});



//condigo refactorizado usando promesas
function obtenerDatosDeUsuario(userId) {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            const userData = response.data;
            return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        })
        .then(response => {
            const userPosts = response.data;
            return { userData, userPosts };
        });
}

obtenerDatosDeUsuario(1)
    .then(data => {
        console.log('Datos de usuario y publicaciones:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
