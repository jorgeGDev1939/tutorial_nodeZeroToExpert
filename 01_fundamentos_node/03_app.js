console.log('Inicio programa');

setTimeout(() => {
    console.log('primer setTimeout')
}, 3000);
setTimeout(() => {
    console.log('segundo setTimeout')
}, 0);
setTimeout(() => {
    console.log('tercero setTimeout')
}, 0);

console.log('Fin programa')