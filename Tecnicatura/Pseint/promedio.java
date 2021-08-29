/* Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
Es posible que el codigo generado no sea completamente correcto. Si encuentra
errores por favor reportelos en el foro (http://pseint.sourceforge.net). */

// En java, el nombre de un archivo fuente debe coincidir con el nombre de la clase que contiene,
// por lo que este archivo debería llamarse "SIN_TITULO.java."

import java.io.*;

public class sin_titulo {

	public static void main(String args[]) throws IOException {
		BufferedReader bufEntrada = new BufferedReader(new InputStreamReader(System.in));
		String nombre;
		int notapractica;
		int notaproblemas;
		double notapromedio;
		int notateoria;
		do {
			System.out.println("ingrese el nombre del alumno");
			nombre = bufEntrada.readLine();
			do {
				System.out.print("ingrese la nota de practica del alumno "+nombre);
				notapractica = Integer.parseInt(bufEntrada.readLine());
			} while (!(notapractica<=10 && notapractica>=0));
			do {
				System.out.print("ingrese la nota de la teoria del alumno "+nombre);
				notateoria = Integer.parseInt(bufEntrada.readLine());
			} while (!(notateoria<=10 && notateoria>=0));
			do {
				System.out.print("ingrese la nota de problemas del alumno "+nombre);
				notaproblemas = Integer.parseInt(bufEntrada.readLine());
			} while (!(notaproblemas<=10 && notaproblemas>=0));
			notapromedio = notapractica*0.1+notaproblemas*0.5+notateoria*0.4;
			System.out.println("la nota final de "+nombre+" es "+notapromedio);
		} while (!(notapractica==0 && notaproblemas==0 && notateoria==0));
	}


}

