class DispositivosEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
}

let dispositivo1 = new DispositivosEntrada("usb", "lenovo")
console.log(dispositivo1.marca);


class Raton extends DispositivosEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton
    }

    toString(){
        return `idRaton: ${this._idRaton}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Teclado extends DispositivosEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `idTeclado: ${this._idTeclado}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }
    
    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        this._tamano = tamano;
    }

    toString(){
        return `idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamano}`
    }
}

// tienen relacion de agregacion a la clase Computadora
class Computadora{
    static contadorComputadora = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor}\n ${this._raton} \n ${this._teclado}`
    }
}
// relacion de agregacion con la clase computadora
class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];        
    }

    get idOrden(){
        return this._idOrden;
    }
    //  aca se encuentra la relacion entre los objetos de tipo orden y computadoras
    aregarComputadoras(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = "";
        for (let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }

        console.log(`Orden ${this._idOrden}, Computadoras: ${computadorasOrden} `)
    }
}

let raton1 = new Raton("usb", "philco");
let raton2 = new Raton("usb", "tavel")

let teclado1 = new Teclado("usb", "lenovo");
let teclado2 = new Teclado("usb2", "lenovo2");

let monitor1 = new Monitor("HP", 14)
let monitor2 = new Monitor("Dell", 27)


console.log(teclado1.toString());
console.log(raton1.toString());
console.log(monitor1.toString());

let computadora1 = new Computadora("HP", monitor1, raton1, teclado1);
console.log(computadora1.toString());
// el metodo este llama sin decirlo a toString
console.log(`${computadora1}`);

let computadora2 = new Computadora("armada", monitor2, raton2, teclado2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.aregarComputadoras(computadora1);
orden1.aregarComputadoras(computadora2);

orden1.mostrarOrden();

let orden2 = new Orden();
orden2.aregarComputadoras(computadora2);
orden2.aregarComputadoras(computadora2);
orden2.aregarComputadoras(computadora1);
orden2.mostrarOrden();