 # Práctica 3

Se trata de un Chat, en el que varios usuarios puedan entablar conversaciones a través del Navegador (se recomienda Firefox o Google Chrome).

* Programa servidor hecho en node.js, donde se conectan los usuarios (el servidor manda mensaje de bienvenida al cliente que se conecte y avisará al resto de que se ha unido).
* Para el intercambio de datos entre los clientes y el servidor se utilizará websockets a través de la biblioteca Socket.io. Además, la aplicación web se desarrollará utilizando el paquete express de Node.
* Cada mensaje enviado por uno de los participantes será visible para el resto. El servidor se encargará de esta tarea. Además, el servidor responderá a estos comandos especiales. La respuesta sólo la verá el cliente que haya enviado el comando (El resto NO la verán)

El servidor procesa los siguientes comandos pero no los envia al resto de usuarios, como sí hace con el resto de mensajes.
/help: Mostrará una lista con todos los comandos soportados
/list: Devolverá el número de usuarios conectados
/hello: El servidor nos devolverá el saludo
/date: Nos devolverá la fecha


## Para utilizar el chat la primera vez se necesita:

* Instalar las dependencias: Ejecutar el comando=> *npm install*
* Instalar las dependencias: Ejecutar el comando=> *npm install express*
* Instalar las dependencias: Ejecutar el comando=> *npm socket.io*
* Arrancar el programa: Ejecutar este comando=> *npm start*

### Ejemplo de ejecución:
En una terminal (dentro de la carpeta que contenga los ficheros del chat) se pone: node chat-server.js
Y en un Navegador (Firefox o Google Chrome) abrir tantas páginas como número de usuarios se quiera, poniendo: http://localhost:8080/chat.html
