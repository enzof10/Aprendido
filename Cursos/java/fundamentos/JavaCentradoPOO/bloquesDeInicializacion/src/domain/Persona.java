package domain;

// hay bloques de inicializacion estaticos y no estaticos
// ambos bloques se van a ejecutar antes del constructor de nuestra clase
/**
 * Persona
 */
public class Persona {
    private final int idPErsona;
    private static int contadorPersonas;


    // bloque se inicializacion estatico
    // se ejecuta cuando se carga esta clase en memoria
    // solo de va a ejecutar una vez
    static{
        System.out.println("Ejecucion bloque estatico");
        // solo podemos usar a atributos estatico
        ++ Persona.contadorPersonas;
    }

    // bloque de inicializacion no estatico, se ejecuta antes del constructror de nuestra clase
    // se va a ejecutar con cada objeto
    {
        System.out.println("Ejecucion de bloque NO estatico");
        this.idPErsona = Persona.contadorPersonas ++;
    }

    public Persona(){
        System.out.println("Ejecucion del constructor de la clase");
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("Persona [idPErsona=");
        builder.append(idPErsona);
        builder.append("]");
        return builder.toString();
    }

    
}