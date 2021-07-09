 # Práctica 4

Se convierte el servidor de Chat de la práctica 3 en una aplicación Electron nativa.

Con una interfaz gráfica debe mostrar la siguiente información:
* Versión de node
* Versión de Electron
* Versión de Chrome
* URL a la que se deben conectar los clientes para chatear
* Mostrar los mensajes que llegan al servidor, del resto de usuarios
* Botón de pruebas para enviar un mensaje a todos los clientes conectados

La aplicación tiene dos partes:
* Por un lado está el motor del servidor, que se ejecutará como el proceso principal de Electron (main.js). Y es prácticamente igual que el de la práctica 3, con la salvedad de que deberá lanzar una ventana con la GUI.

* Y por el otro parte está la interfaz gráfica, formada por una ventana con sus elementos html, css y javascript.

La URL a la que se conectan los clientes obtiene la dirección IP de la máquina en la que se está ejecutando.

El proceso principal lleva la cuenta de los clientes que están conectados, y la enviará para mostrarla en la interfaz gráfica. Lo mismo con los mensajes recibidos de los usuarios: El proceso main.js los envía al proceso de rendizado para sacarlos por la interfaz gráfica. Cuando se apriete el botón de Enviar mensaje de prueba el proceso de renderizado se lo comunicará al proceso principal, que enviará los mensajes a los usuarios

En la versión básica basta con que arranque al ejecutar npm start.
