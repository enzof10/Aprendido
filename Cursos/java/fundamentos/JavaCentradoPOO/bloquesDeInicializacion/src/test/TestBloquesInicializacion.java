package test;

import domain.Persona;

public class TestBloquesInicializacion {
    public static void main(String[] args) {
        
        Persona persona1 = new Persona();
        System.out.println("TestBloquesInicializacion.main()"+ persona1);

        System.out.println("");
        Persona persona2 = new Persona();
        System.out.println("TestBloquesInicializacion.main()"+ persona2);

    }
}
