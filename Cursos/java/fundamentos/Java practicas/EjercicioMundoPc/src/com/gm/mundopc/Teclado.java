package com.gm.mundopc;

public final class  Teclado extends DispositivosEntrada {
    
    private final int idTeclado;
    
    private static int contadorTeclados;
    
    public Teclado(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados;
        }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("Teclado {idTeclado=");
        builder.append(idTeclado);
        builder.append("}");
        builder.append(super.toString());
        return builder.toString();
    }
    
    
}
