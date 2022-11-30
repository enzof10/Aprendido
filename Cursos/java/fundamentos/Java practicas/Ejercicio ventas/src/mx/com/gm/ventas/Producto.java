package mx.com.gm.ventas;

public class Producto {
    private final int idProducto;
    private String nombre;
    private double precio;
    private static int contadorProductos;

    private Producto(){
        this.idProducto = ++ Producto.contadorProductos;
    }

    public Producto(String nombre, double precio){
        // mandamos a llamar el constructor privado de nuestra clase
        this();
        this.nombre = nombre;
        this.precio = precio;
    }

    public int getIdProducto() {
        return idProducto;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getPrecio() {
        return this.precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("Producto {idProducto=");
        builder.append(idProducto);
        builder.append(", nombre=");
        builder.append(nombre);
        builder.append(", precio=");
        builder.append(precio);
        builder.append("}");
        return builder.toString();
    }

}
