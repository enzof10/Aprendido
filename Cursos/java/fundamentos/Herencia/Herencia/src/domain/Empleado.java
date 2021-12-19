package domain;

// si no indico de que clase exiende lo  hace de manera automatica como objet
public class Empleado extends Persona{
    // como esta clase no va a tener clases hijas los atributos van a ser de tipo private
    private int idEmpleado;
    private double sueldo;
    private static int contadorEmpleado;



    public Empleado(String nombre, double sueldo) {
        super(nombre);
        // para saber que es un atributo estatico antepongo el nombre de la clase
        this.idEmpleado = ++ Empleado.contadorEmpleado;
        this.sueldo = sueldo;
    }



    public int getIdEmpleado() {
        return this.idEmpleado;
    }



    public void setIdEmpleado(int idEmpleado) {
        this.idEmpleado = idEmpleado;
    }



    public double getSueldo() {
        return this.sueldo;
    }



    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }



    @Override
    public String toString() {
        return "Empleado [idEmpleado=" + idEmpleado + ", sueldo=" + sueldo + super.toString() +"]";
    }

    
}
