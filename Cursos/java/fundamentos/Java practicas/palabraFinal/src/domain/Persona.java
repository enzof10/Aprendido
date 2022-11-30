package domain;

public class Persona {
    public static final int MI_CONSTANTE= 1;

    private String nombre;


    public void imprimir(){
        System.out.println("Metodo imprimir");
    }


    public static int getMiConstante() {
        return MI_CONSTANTE;
    }


    public String getNombre() {
        return nombre;
    }


    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    
}
