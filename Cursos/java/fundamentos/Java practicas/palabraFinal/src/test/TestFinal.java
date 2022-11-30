package test;

import domain.Persona;

public class TestFinal {
    public static void main(String[] args) {
        final int miVariable = 10;
        System.out.println(miVariable);
        System.out.println(Persona.MI_CONSTANTE);

        final Persona persona1 = new Persona();
        // persona1 = new Persona();
        persona1.setNombre("juan");
        System.out.println(persona1.getNombre());
        
    }
}