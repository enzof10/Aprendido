class  Persona{

    static contadorPersonas = 0;
    constructor (nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    // atributos(){
    //     // template string
    //     return `
    //         ${this._idPersona} 
    //         ${this._apellido} 
    //         ${this._nombre} 
    //         ${this._edad}`;
    // }
    toString(){
        // template string
        return `${this._idPersona} 
                ${this._apellido} 
                ${this._nombre} 
                ${this._edad}`; 
    }
}

class Empleados extends Persona{

    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado= ++Empleados.contadorEmpleados;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo(sueldo);
    }
    toString(){
        return `
            idEmpleado: ${this._idEmpleado}, 
            idPersona: ${super.toString()}
            ${this._sueldo}`;
    }
}

class Cliente extends Persona{
    static contadorCliente = 0;
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        this._idClinete = ++Cliente.contadorCliente;
        this._fechaRegistro = new Date();
    }
    get idClinete(){
        return this._idClinete;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return `
        idCliente: ${this._idClinete}, 
        idPersona:${super.toString()}
        ${this._fechaRegistro}`;
    }
}
let cliente1 = new Cliente("Zuni", "borda", 43);
console.log(cliente1.toString());

let empleado1 = new Empleados("Sol", "Nadal" , 22, 13131);
console.log(empleado1.toString());

console.log(empleado1.sueldo);
console.log(empleado1.idEmpleado);