// arrancamos con la clase que no tiene relacion con otra clase
// ya que la clase orden va a tener un arreglo de tipo producto
// variables subrayadas son estaticas
class Producto{

    static contadorProducto = 0;
    
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto},Nombre: ${this._nombre},Precio: $${this._precio}`
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5
    }

    constructor(){
        // aca establecemos la relacion de agregacion, es decir que una orden puede tener muchos productos a travez del arreglo
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];//Asi preparamos al atributo para que le se puedan agregar productos
        // this._contadosProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        // primero debemos verificar su superamos el maximo de productos
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            // otra sitaxis para lo mismo
            // this._productos[this._contadosProductosAgregados++] = producto;

        }
        else{
            console.log("No se pueden agregar mas productos")
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){//sintaxis simplificada para poder iterar arreglos con js
        totalVenta += producto.precio;//toalventa = totalventa + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = "";
        for( let producto of this._productos){
            productosOrden +='\n{'+ producto.toString()+'}';
        }
        console.log(`Orden: ${this._idOrden} total: ${this.calcularTotal()}, Productos: ${productosOrden}`)
    }
}


// los metodos get y set solo se recomienda usar afuera de la clase

let producto1 = new Producto("pantalon", 200);
let producto2 = new Producto("camisa", 100);

// relacion de agregacion ya que agregamos cosas de una clase a la otra

let orden1 = new Orden();
// usamos el objeto o instancia orden1 de la clase Orden
// y le agregamos tantos objetos productos como querramos con el metodo agregarProducto
orden1.agregarProducto(producto1);
// aca esta la relacion de agregacion
// los objetos de producto pueden existir igual aunque no exista ninguna orden
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto("Cinturon", 40);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();
// muestra por consola que no se pueden agregar mas productos