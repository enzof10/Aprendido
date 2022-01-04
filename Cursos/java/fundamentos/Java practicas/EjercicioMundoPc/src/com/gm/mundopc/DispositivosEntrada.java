package com.gm.mundopc;

public class DispositivosEntrada {
    
    protected String tipoEntrada;
    protected String marca;


    protected DispositivosEntrada(String tipoEntrada, String marca) {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }


    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("DispositivosEntrada {marca=");
        builder.append(marca);
        builder.append(", tipoEntrada=");
        builder.append(tipoEntrada);
        builder.append("}");
        return builder.toString();
    }


    public String getTipoEntrada() {
        return this.tipoEntrada;
    }


    public void setTipoEntrada(String tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
    }


    public String getMarca() {
        return this.marca;
    }


    public void setMarca(String marca) {
        this.marca = marca;
    }

    
}
