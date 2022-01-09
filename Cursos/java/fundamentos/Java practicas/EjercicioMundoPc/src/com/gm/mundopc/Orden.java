package com.gm.mundopc;

import java.util.Arrays;

public class Orden {
    
    private final int idOrden;

    private Computadora computadoras[];

    private static int contadorOrdenes;

    private int contadorComputadoras;

    private static int MAX_COMPUTADORAS = 10;

    public Orden(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadoras = new Computadora[Orden.MAX_COMPUTADORAS];
    }
    
    public void agregarComputadora(Computadora computadora){
        if(this.contadorComputadoras < Orden.MAX_COMPUTADORAS){
            // primero contador computadoras va a valer 0 y despues 1
            this.computadoras[this.contadorComputadoras++] = computadora;
        }
        else{
            System.out.println("Has superado el maximo de coputadoras permitidas "+ Orden.MAX_COMPUTADORAS);
        }
    }

    public void mostrarOrden(){
        System.out.println("Orden #" + this.idOrden);
        System.out.println("Computadoras de la orden #:"+ this.idOrden);

        for (int computadora = 0; computadora < this.contadorComputadoras; computadora++) {
            System.out.println(this.computadoras[computadora]);
        }
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("Orden {computadoras=");
        builder.append(Arrays.toString(computadoras));
        builder.append(", contadorComputadoras=");
        builder.append(contadorComputadoras);
        builder.append(", idOrden=");
        builder.append(idOrden);
        builder.append("}");
        return builder.toString();
    }

    
}
