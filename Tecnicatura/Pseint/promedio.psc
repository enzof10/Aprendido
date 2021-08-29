Algoritmo sin_titulo
	Definir notapractica, notateoria, notaproblemas como enteros;
	Definir nombre Como Caracter;
	Definir notapromedio Como Real;
	Repetir
		Escribir "ingrese el nombre del alumno";
		Leer nombre;
	Repetir
		Escribir "ingrese la nota de practica del alumno " nombre Sin Saltar;
		Leer notapractica;
	Hasta Que notapractica<=10 y notapractica>=0
	Repetir
		Escribir "ingrese la nota de la teoria del alumno " nombre Sin Saltar;
		Leer notateoria;
	Hasta Que notateoria<=10 y notateoria>=0
	Repetir
		Escribir "ingrese la nota de problemas del alumno " nombre Sin Saltar;
		Leer notaproblemas;
	Hasta Que notaproblemas<=10 y notaproblemas>=0
		notapromedio<- notapractica*0.1 + notaproblemas*0.5 + notateoria*0.4;
		Escribir "la nota final de " nombre " es " notapromedio ;
	Hasta Que notapractica=0 y notaproblemas=0 y notateoria=0
FinAlgoritmo
