package test;

import domain.Cliente;
import domain.Empleado;

public class TestHerencia {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("juan", 5000);
        Cliente cliente1 = new Cliente("enzo", 'm', 21, "las heras 901", true);
        System.out.println("Empleado1: " + empleado1);

        System.out.println("Cliente1: " + cliente1);
        System.out.println(cliente1.getFechaRegistro());
    }
}
