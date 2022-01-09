package test;

import enumeracion.Continentes;
import enumeracion.Dias;

public class TestEnumeraciones {
    public static void main(String[] args) {
    //    para usarlos debemos usar el nombre de la enumeracion
        // System.out.println("Dia 1: "+ Dias.LUNES);

        // indicarDiaDeLaSemana(Dias.LUNES);
        // indicarDiaDeLaSemana(Dias.MARTES);

        System.out.println("Continente numero 4: " + Continentes.AMERICA);
        System.out.println("N°. de paises en el 4to continente: "+ Continentes.AMERICA.getPaises());
     
     
        System.out.println("Continente numero 1: " + Continentes.AFRICA);
        System.out.println("N°. de paises en el 1er continente: "+ Continentes.AFRICA.getPaises());
}

    private static void indicarDiaDeLaSemana(Dias dias){
        // EL SWITHC ya sabe que vamos a usar un tipo de numeraciones
        // por eso no necesitamos usar la palaba Dias
        switch (dias) {
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana");
                break;
        }
    }
}
