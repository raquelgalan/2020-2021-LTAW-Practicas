//-- Elementos del interfaz
const display = document.getElementById("display");
const msg = document.getElementById("msg");
const send = document.getElementById("send");

//-- Crear un websocket. Se establece la conexión con el servidor
const socket = io();


socket.on("message", (msg)=>{
    display.innerHTML += '<p style="color:blue">' + msg + '</p>';
});


send.onclick=() => {
    if (msg.value)
        socket.send(msg.value);
        //-- Borrar el mensaje actual
        msg.value = "";
}
//-- Al apretar el botón se envía un mensaje al servidor
msg.onchange = () => {
    if (msg_entry.value)
        socket.send(msg.value);
  
  //-- Borrar el mensaje actual
  msg.value = "";
}