package domain;

/**
 * Persona
 */
public class Persona {

    private String nombre;

    

    public Persona(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("Persona [nombre=");
        builder.append(nombre);
        builder.append("]");
        builder.append(super.toString());
        return builder.toString();
    }
    
}