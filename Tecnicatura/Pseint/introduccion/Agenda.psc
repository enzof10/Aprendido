Funcion  funcionAgenda 
	Definir datos Como cadena;
	Definir DatosDentro, respuesta Como Caracter;
	definir i,j, accion Como Entero;
	Dimension datos[80];
	j=1;	
	para i=0 hasta 5 Con Paso 1
		Escribir "ingrese 1)Apellido 2)Nombre 3)Email 4)Direccion 5)Localidad 6)Pais 7)telefono 8)Fecha de nacimiento 9)genero"; 
		Escribir j ")" Sin Saltar;
		Repetir
			Leer DatosDentro;
			Si DatosDentro="" Entonces
				Escribir "Debe completar el campo " j;
			Fin Si
		Hasta Que DatosDentro<>"";
		datos[i]<-DatosDentro;
		j=j+1;
		Limpiar Pantalla;
	FinPara
	Para i=6 hasta 8 con paso 1
		Escribir "ingrese 1)Apellido 2)Nombre 3)Email 4)Direccion 5)Localidad 6)Pais 7)telefono 8)Fecha de nacimiento"; 
		Escribir j ")" Sin Saltar;
		Leer DatosDentro;
		datos[i]<-DatosDentro;
		j=j+1;
		Limpiar Pantalla;
	FinPara
	
Fin Funcion

Algoritmo Agenda
	Definir datos Como cadena;
	Definir DatosDentro, respuesta Como Caracter;
	definir i,j, accion Como Entero;
	Dimension datos[80];
	j=1;	
     funcionAgenda;
//	para i=0 hasta 5 Con Paso 1
//		Escribir "ingrese 1)Apellido 2)Nombre 3)Email 4)Direccion 5)Localidad 6)Pais 7)telefono 8)Fecha de nacimiento 9)genero"; 
//		Escribir j ")" Sin Saltar;
//		Repetir
//			Leer DatosDentro;
//			Si DatosDentro="" Entonces
//				Escribir "Debe completar el campo " j;
//			Fin Si
//		Hasta Que DatosDentro<>"";
//		datos[i]<-DatosDentro;
//		j=j+1;
//		Limpiar Pantalla;
//	FinPara
//	Para i=6 hasta 8 con paso 1
//		Escribir "ingrese 1)Apellido 2)Nombre 3)Email 4)Direccion 5)Localidad 6)Pais 7)telefono 8)Fecha de nacimiento"; 
//		Escribir j ")" Sin Saltar;
//			Leer DatosDentro;
//		datos[i]<-DatosDentro;
//		j=j+1;
//		Limpiar Pantalla;
//	FinPara
	para i=0 hasta 8 Con Paso 1
		Escribir "estos son los dattos "+ datos[i];
	FinPara
	
	//altas y bajas
	Escribir "¿desea hacer una alta, baja, modificacion o consulta?";
	Leer respuesta;
	Si respuesta="si" Entonces
		Limpiar Pantalla;
		Escribir "¿que desea hacer? 1)Alta 2)Baja 3)Modificacion 4)Consulta";
		Leer accion;
		 Segun accion Hacer
			 1:
			   funcionAgenda;
//			 2:
//				 
//			 3:
//				 
//			 4: 
//				
//			 De Otro Modo:
//				 secuencia_de_acciones_dom
		 Fin Segun
	Fin Si
FinAlgoritmo
