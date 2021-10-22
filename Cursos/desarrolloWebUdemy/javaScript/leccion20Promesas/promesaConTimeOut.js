let promesa = new Promise((resolver) =>{
    console.log("Inicio de promesa");
    setTimeout( ()=> resolver("Saludos con promesa y timeout"), 3000)//3 segundos
    console.log("Fin promesa");
});
// con este boseto podemos mandar a llamar varias promesas
//y podemos programar procesos cronicos y asincronicos
//se ejecutan primero los dos mensajes de console pero mientras el timeout
promesa.then(valor => console.log(valor));

