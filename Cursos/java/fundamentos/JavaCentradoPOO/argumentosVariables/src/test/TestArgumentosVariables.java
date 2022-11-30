package test;

/**
 * TestArgumentosVariables
 */
public class TestArgumentosVariables {

    // se conoce coo argumentos variables porque la cantidad de argumentos varian
    public static void main(String[] args) {
        imprimirNumeros(3, 4, 5);
        imprimirNumeros(3, 8);

        
        variosPArametros("Juan", 8, 9, 10);
    }

    private static void variosPArametros(String nombre, int... numeros){
        System.out.println("Nombre: "+ nombre);
        imprimirNumeros(numeros);
    }

    // este metodo solo lo vamos a acceder desde esta clase por eso private
    // private static void imprimirNumeros(int[] numeros)
    private static void imprimirNumeros(int... numeros){
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elemento: "+ numeros[i]);
        }
    }
}