// manda a llamar a la function tipo setTimeout cada cierto tiempo

let reloj = () =>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

// setInterval(reloj,1000);//1 segundo
// setInterval(reloj, 10000);//10 segundos