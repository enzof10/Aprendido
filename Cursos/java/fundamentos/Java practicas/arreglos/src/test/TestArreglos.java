package test;

/**
 * TestArreglos
 */
public class TestArreglos {

    public static void main(String[] args) {
        // hay que definir la cantidad de elementos uqe va a tener el arreglo
        int edades [] = new int[3];
        System.out.println("edades"+ edades);

        edades[0] = 10;
        System.out.println("Edades indice 0"+edades[0]);

        // edades [3]= 4
        // esto arroja un error en tiempo de ejecucion

        for(int i = 0; i< edades.length; i++){
            System.out.println("Edades elementos" + i+ ": "+ edades[i]);
        }

        // sintaxis resumida
        String frutas[] = {"naranja", "platano", "uva"};
        for (int i = 0; i < frutas.length; i++) {
            System.out.println("Frutas: " + frutas[i]);
        }

    }
}