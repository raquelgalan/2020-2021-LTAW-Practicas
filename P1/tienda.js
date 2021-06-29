//--Práctica 1: Tienda online

//-- Declarar constantes
const http = require('http'); //-- Módulo http
const fs = require('fs'); //-- Módulo fs
const url = require('url');//-- Módulo url
const PUERTO = 9000; //-- Puerto a utilizar


//-- Crear el servidor. Por cada petición se imprime mensaje.
const server = http.createServer(function (req, res) {
    
  //-- Indicamos que se ha recibido una petición
  console.log("Petición recibida!");

  //-- La clase mas usada es la URL que es la que me permite crear objetos URL

  //-- Crear el objeto URL del mensaje de solitud (req)
  //-- y coger el recurso (url)
  let myURL = url.parse(req.url, true);

  //-- Ruta de recurso
  console.log("Recurso recibido: " + myURL.pathname);

  //-- Cabecera que indica el tipo de datos del
  //-- cuerpo de la respuesta: Texto plano
  res.setHeader('Content-Type', 'text/plain');

  //-- Cargar en el fichero mi tienda
  let filename = "";

  const mime = {
    'html' : 'text/html',
    'css'  : 'text/css',
    'jpg'  : 'image/jpg',
    'jpeg' : 'image/jpeg',
    'png'  : 'image/png'
  };

  //-- Obtenemos el fichero correspondiente.
  if (myURL.pathname == '/'){
    filename += "tienda.html";  //-- Abrir página
  }else{
    filename += myURL.pathname.substr(1);  //-- Abrir fichero
  }

  //-- Realizar la lectura asíncrona
  fs.readFile(filename, (err, data) => {
    if (err){
      res.writeHead(404, {'Content-Type': mime});
      return res.end('404 not found');
    }
    //-- Petición 200 OK
    res.writeHead(200, {'Content-Type': mime});
    console.log("Petición 200 OK");

    //-- Enviar datos 
    res.write(data);
    res.end();
  
  });
});

//-- Activar servidor, escuchando peticiones en el puerto.
server.listen(PUERTO);

//-- Mensaje del Servidor escuchando
console.log("Servidor activado. Escuchando en el puerto: " + PUERTO);