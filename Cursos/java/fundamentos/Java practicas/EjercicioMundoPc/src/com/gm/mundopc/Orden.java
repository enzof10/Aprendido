package com.gm.mundopc;

import java.util.Arrays;

public class Orden {
    private final int idOrden;

    private Computadora computadoras[];

    private static int contadorOrdenes;

    private int contadorComputadoras;

    private static int maxComputadoras;

    public Orden(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadoras = new Computadora[Orden.maxComputadoras];
    }
    
    public void agregarComputadora(Computadora computadora){
        if(this.contadorComputadoras < Orden.maxComputadoras){
            this.computadoras[++this.contadorComputadoras] = computadora;
        }
        else{
            System.out.println("Se ha superado el maximo de coputadoras permitidas");
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
