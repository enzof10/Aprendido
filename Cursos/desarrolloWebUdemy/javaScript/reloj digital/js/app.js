const mostrarReloj = () =>{
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segundos}`


    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["dom", "lun","mar","mie","jue","vie","sab"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate()
    let mes = meses[fecha.getMonth()];
    fechaTexto = `${diaSemana},${dia},${mes}`;
    document.getElementById("fecha").innerHTML = fechaTexto;

    document.getElementById("contenedor").classList.toggle("animar");
}

const formatoHora = (hora)=>{
    if( hora < 10){
        hora = "0" + hora;
    }
    return hora;
}
// estamos pasando la referencia solamente por eso no le ponemos parentesis
setInterval(mostrarReloj, 1000);