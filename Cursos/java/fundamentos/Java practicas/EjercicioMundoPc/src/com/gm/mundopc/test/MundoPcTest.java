package com.gm.mundopc.test;

import com.gm.mundopc.Computadora;
import com.gm.mundopc.Monitor;
import com.gm.mundopc.Orden;
import com.gm.mundopc.Raton;
import com.gm.mundopc.Teclado;

public class MundoPcTest {
    public static void main(String[] args) {
        Teclado teclado1 = new Teclado("usb", "sanyo");
        Raton raton1 = new Raton("ratonusb", "raton sanyo");
        Monitor monitor1 = new Monitor("monitor algo", 12.42);

        Computadora computadora1 = new Computadora("compu1", monitor1, teclado1, raton1);
        Computadora computadora2 = new Computadora("compu1", monitor1, teclado1, raton1);

        Orden orden1 = new Orden();

        orden1.agregarComputadora(computadora1);

        orden1.toString();
    }
}
