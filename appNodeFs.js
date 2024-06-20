/*Usando File System*/

//Forma de concatenar: 'Nombre de usuario: ' + userName;
//Template String
//ALT+96 = `

const fs = require("fs");

const userName = "Exaul";
const userLast = "Falcones";
const userFull = userName + " " + userLast;

fs.writeFile("new-test-data.txt", `Nombre de usuario: ${userFull}`, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Archivo creado satisfactoriamente");
});
