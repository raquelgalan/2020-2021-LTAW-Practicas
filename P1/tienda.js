//--Tienda online

//-- Declarar constantes
const http = require('http'); //-- Módulo http
const fs = require('fs'); //-- Módulo fs
const PUERTO = 9000; //-- Puerto a utilizar



//-- Crear el servidor. Por cada petición se imprime mensaje.
const server = http.createServer((req, res) => {
    
    //-- Indicamos que se ha recibido una petición
    console.log("Petición recibida!");
  });


//-- Activar servidor, escuchando peticiones en el puerto.
server.listen(PUERTO);

console.log("Servidor activado. Escuchando en el puerto: " + PUERTO);