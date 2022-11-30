package test;

import domain.Persona;

public class TestMatrices {
    public static void main(String[] args) {
        int edades[][] = new int[3][2];
        System.out.println(edades);

        edades[0][0] = 5; 
        edades[0][1] = 7; 
        edades[1][0] = 8; 
        edades[1][1] = 4;
        System.out.println("edades 0-0: "+ edades[0][0]);
        System.out.println("edades 0-1: "+ edades[0][1]);
        System.out.println("edades 1-0: "+ edades[1][0]);
        System.out.println("edades 1-1: "+ edades[1][1]);

        for (int renglones = 0; renglones < edades.length; renglones++) {
            for (int columnas = 0; columnas < edades[renglones].length; columnas++) {
                System.out.println("edades "+ renglones + "-" + columnas+ ": "+ edades[renglones][columnas]);  
            }
        }

        String frutas[][]= {{"naranja", "limon"}, {"fresa", "zarzamora","Mora"}};
        
        // for (int i = 0; i < frutas.length; i++) {
        //         for (int j = 0; j < frutas[i].length; j++) {
        //             System.out.println("Frutas "+ i+ "-" + j + ": "+ frutas[i][j]);
        //         }
        // }
        imprimir(frutas);
        Persona personas[][] = new Persona[2][3];
        personas[0][0]= new Persona("juan");
        personas[0][1]= new Persona("carla");
        personas[1][0]= new Persona("ricardo");
        personas[1][1]= new Persona("alberto");
        
        imprimir(personas);
        
    }

    public static void imprimir(Object matriz[][]){
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.println("matriz " + i+ "-" + j + ": "+ matriz[i][j]);
            }
    }
    } 
}
