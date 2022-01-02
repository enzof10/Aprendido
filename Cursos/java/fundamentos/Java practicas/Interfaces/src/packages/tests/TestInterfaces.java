package packages.tests;

import packages.accesodatos.*;

public class TestInterfaces {
    public static void main(String[] args) {
        IAccesoDatos listarDatos = new ImplementacionMySql();
        // listarDatos.listar();

        listarDatos = new ImplementaconOracle();
        // listarDatos.listar();
        imprimir(listarDatos);

    }

    public  static void imprimir ( IAccesoDatos datos ) {
        datos.listar();
    }
    
}
