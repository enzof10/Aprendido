Algoritmo sin_titulo
	Definir numero Como Entero;
	Escribir "Introduce un numero";
	Leer numero;
	Mientras numero=0 
		Escribir "vuelva a ingresar otro numero, el 0 no corresponde a ninguno";
		Leer numero;
	FinMientras
	Si (numero=0) Entonces
		Escribir "El " numero " no es par ni impar";
	Sino
		//comprobamos si el numero es par
		Si (numero MOD 2=0) Entonces
			Escribir "El " numero " es par";
		Sino
			Escribir "El " numero " no es par";
		FinSi
	FinSi
FinAlgoritmo
