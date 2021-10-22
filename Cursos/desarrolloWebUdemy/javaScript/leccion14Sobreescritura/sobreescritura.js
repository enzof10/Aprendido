class Empleado{

    static ContadorEmpleado = 0;
    constructor(nombre, sueldo){
        this._idEmpleado = ++ Empleado.ContadorEmpleado;
        this._nombre = nombre;
        this._sueldo = sueldo;

    }

    // para poner practca el cocnepto de sobreeescritura
    obtenerDetalles(){
        return `Empleado: ${this._idEmpleado}\n Nombre: ${this._nombre},Sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    // sobreescrimimos el metodo de la clase padre
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} dpto: ${this._departamento}`;
    }
}

let gerente1 = new Gerente("Carlos", 40000, "Sistemas");
// la clase padre no tiene acceso al atributo departamento por eso no se muetra
console.log( gerente1.obtenerDetalles());

let empleado1 = new Empleado("Ricardo", 2000);
console.log(empleado1.obtenerDetalles());

// metodo polimorfico que no se sabe su tipo
function determinarTipo(tipoClase){
    console.log(tipoClase.obtenerDetalles());
    // para saber el tipo de clase a la que corresponde la instancia
    // en primer lugar se recomienda poner la clase de menor gerarquia
    if( tipoClase instanceof Gerente){
        console.log("Es un  objeto de tipo Gerente");
        console.log(tipoClase._departamento);
    }
    else if (tipoClase instanceof Empleado){
        console.log("Es un objeto de tipo Empleado");
    }
    else if (tipoClase instanceof Object){
        console.log("es un objeto tipo Objet");
    }
}

// sirve para obtenerDetalles de clase empleado y clase gerente

determinarTipo(empleado1);
// tambien nos responde que el tipo gerente es tipo empleado
determinarTipo(gerente1);

// para saber el tipo que corresponde 