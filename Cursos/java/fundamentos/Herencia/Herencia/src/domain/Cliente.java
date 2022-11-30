package domain;

import java.util.Date;

public class Cliente extends Persona{
    private int idCliente;
    private Date fechaRegistro;
    private boolean vip;
    private static int contadorCliente;


    public Cliente(Date fechaRegistro, String nombre, char genero, int edad, String direccion, boolean vip) {
        super(nombre, genero, edad, direccion);
        this.fechaRegistro = fechaRegistro;
        this.idCliente = ++ Cliente.contadorCliente;
        this.vip = vip;
    }


    public int getIdCliente() {
        return idCliente;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }


    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }


    public boolean isVip() {
        return vip;
    }


    public void setVip(boolean vip) {
        this.vip = vip;
    }


    @Override
    public String toString() {
        return "Cliente [fechaRegistro=" + fechaRegistro + ", idCliente=" + idCliente + ", vip=" + vip + "]" + super.toString();
    }


    


}
