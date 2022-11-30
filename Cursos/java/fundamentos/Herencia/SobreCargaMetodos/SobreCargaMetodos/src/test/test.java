package test;

import Operaciones.Operaciones;

public class test {
    public static void main(String[] args) {
        var resultado = Operaciones.sumar(5, 3);
        System.out.println(resultado);

        var resultadoD = Operaciones.sumar(3.3, 2.4);
        System.out.println(resultadoD);

        var resultado3 = Operaciones.sumar(3, 5l);
        System.out.println(resultado3);
    }
}
