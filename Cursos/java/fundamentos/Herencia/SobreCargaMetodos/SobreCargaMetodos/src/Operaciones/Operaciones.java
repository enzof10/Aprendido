package Operaciones;

public class Operaciones {
    // stattic para que no necesitemos instanciar la clase para los metodos
    // el contexto estatico no puede acceder a this
    public static int sumar(int a, int b){
        System.out.println("Sumar(int a, int b)");
        return a + b;
    }

    public static double sumar(double a ,double b){
        System.out.println("Sumar(double a, double b)");
        return a + b;
    }


}
