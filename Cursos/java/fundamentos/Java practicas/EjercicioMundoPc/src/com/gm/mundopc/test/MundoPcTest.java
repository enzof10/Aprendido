package com.gm.mundopc.test;

// import com.gm.mundopc.Computadora;
// import com.gm.mundopc.Monitor;
// import com.gm.mundopc.Orden;
// import com.gm.mundopc.Raton;
// import com.gm.mundopc.Teclado;
import com.gm.mundopc.*;

public class MundoPcTest {
    public static void main(String[] args) {
        Teclado tecladoHP = new Teclado("bluetooh", "HP");
        Raton ratonHP = new Raton("bluetooh", "HP");
        Monitor monitorHP = new Monitor("HP", 12.42);
        Computadora computadoraHP = new Computadora("computadora HP", monitorHP, tecladoHP, ratonHP);
       

        Teclado tecladoGamer = new Teclado("bluetooh", "Gamer");
        Raton ratonGamer = new Raton("bluetooh", "Gamer");
        Monitor monitorGamer = new Monitor("Gamer", 12.42);
        Computadora computadoraGamer = new Computadora("computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
       
        Orden orden1 = new Orden();
        orden1.agregarComputadora(computadoraGamer);
        orden1.agregarComputadora(computadoraHP);

        orden1.mostrarOrden();
    }
}
