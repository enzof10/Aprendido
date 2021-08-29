Algoritmo sin_titulo
	Definir a Como Entero;
	Dimension a[3,3];
	Definir fi, co Como Entero;
	Definir suma Como Entero;
	suma<-0;
	
	Para fi<-0 hasta 2 con paso 1 Hacer//llenar la matriz
		Para co<-0 hasta 2 Con Paso 1 Hacer
			Escribir "ingrese el numero para la posicion: fila/columna: " fi "/", co Sin saltar;
			Leer a[fi,co];
		FinPara
	FinPara
	
	Para fi<-0 hasta 2 con paso 1 Hacer//mostrar la matriz en forma de tabla
		Para co<-0 hasta 2 Con Paso 1 Hacer
			Escribir a[fi,co] "   " Sin Saltar; //sin saltar sirve para que se escriba al lado;
		FinPara
		Escribir "";
	FinPara	
	Para fi<-0 hasta 2 con paso 1 Hacer//sumar los elementos en diagonal de la matriz
		Para co<-0 hasta 2 Con Paso 1 
			si fi= co Entonces
				suma<- suma + a[fi,co];
			FinSi 
		FinPara
	FinPara	
	Escribir "la suma es " suma;
FinAlgoritmo
