Algoritmo sin_titulo
	Definir apellido, respuesta Como Caracter;
	Definir Array como cadena;
	Definir x, z, i, j, baja Como entero;
	z =0;
	x=0;
	Dimension Array[3, 8];
	Para i<-0 Hasta 2 Con Paso 1 Hacer
		Para j=0 Hasta 7 Con Paso 1 Hacer
			Escribir j Sin Saltar;
			Leer apellido;
			Array[x,z]<-apellido;
			z=z +1;
		Fin Para
		Escribir x Sin Saltar;
		z=0;
		x=x+1;
	Fin Para
	Escribir "escribir baja";
	Leer respuesta;
	Si Minusculas(respuesta)= "baja" Entonces
		z=0;
		x=0;
		Escribir "entro al baja";
		Escribir "ingrese el apellido o nombre del usuario que quiera eliminar";
		Leer apellido;
		Para i<-0 Hasta 2 Con Paso 1 Hacer
			si Array[i,j]=apellido
				baja<-i;
					Para j=0 Hasta 7 Con Paso 1 Hacer
						Escribir i j;
						Escribir i+1 j;
						Array[i,j]<-Array[i+1, j];
					Fin Para
			FinSi
		FinPara
				
					//ordenamiento de los datos
					Si baja=i Entonces
								Para i=baja Hasta 2-1 Con Paso 1 Hacer
									Para j=0 Hasta 7 Con Paso 1 Hacer
										Array[baja,j]<- Array[baja+1,j];
									Fin Para
									baja=baja+1;
								Fin Para
								Para i=baja hasta baja
								     Para j=2 Hasta 7 Con Paso 1 Hacer
										 Array[baja,j]<-"";
								     Fin Para
							    FinPara
					Fin Si
		FinSi
		Para i=0 Hasta 2-1 Con Paso 1 Hacer
			Para j=0 Hasta 7 Con Paso 1 Hacer
				Escribir i j " " Array[i,j];
			Fin Para
		Fin Para
		
FinAlgoritmo
