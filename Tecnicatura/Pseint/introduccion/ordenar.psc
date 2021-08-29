	Algoritmo AgendaPara
		Definir Array como cadena;
		Definir respuesta Como Caracter;
		Definir i, j, x, z, usuario, baja, modificacion,numOrdena , posMenor, posMayor, l Como Entero;
		Dimension  Array[10, 9];
		Definir apellido, nombre, datoConsulta, datofiltrado, datoOrdena Como Caracter;
		x=3;
		z=0;
		usuario=0;
		Array[0,0]<-"Apellido";
		Array[0,1]<-"nombre";
		Array[0,2]<-"Email";
		Array[0,3]<-"Direccion";
		Array[0,4]<-"localidad";
		Array[0,5]<-"Pais";
		Array[0,6]<-"Telefono";
		Array[0,7]<-"Fecha de nacimiento";
		Array[0,8]<-"Genero";
		
		Para I=1 Hasta X Con Paso 1 Hacer
			Para J=0 Hasta 8 Con Paso 1 Hacer
				Escribir "INGRESAR " Array[0,j] Sin Saltar;
				Leer apellido;
				Array[I,J]<-apellido;
			Fin Para
		Fin Para
		
		Escribir "ingrese la forma que quiere ordenar la agenda(abecedario: apellido, nombre ect)";
		Leer respuesta;
		//identifica la forma en que va a ordenar los datos de los usuarios
		Para j=0 Hasta 8 Con Paso 1 Hacer
			Si Minusculas(respuesta)=Minusculas(Array[0,j]) Entonces
				numOrdena<-j;
			Fin Si
		Fin Para
		//ordenar la matriz segun lo requieran
		Para i=1 Hasta x Con Paso 1 Hacer
			posMenor<-i;
			//identifica lo que le digan y compara con el resto de usuarios
			Para j=i+1 Hasta x Con Paso 1 Hacer
				//identifica el usuario menor de toda la lista
				Si Array[j,numOrdena]<Array[posMenor,numOrdena] Entonces
					posMenor<-j;
				Fin Si
			Fin Para
			//ordena el Array por abecedario de acuerdo al dato requerido
			Para l=0 Hasta 8 Con Paso 1 Hacer
				//asigna la posicion que voy a modificar a una variable para no perder el dato que se modifica
				//desde la posicion [1 ,0]  que es donde deberia estar el menor
				datoOrdena<-Array[i,l];
				//asigna el dato menor a la menor ubicaicon osea la [1,0]
				Array[i, l]<-Array[posMenor,l];
				//asigna el dato de la variable al que va a estar en una posicion mayor (j identificado arriba)
					Array[posMenor,l]<-datoOrdena;
				Fin Para
			Fin Para
			Para i=1 Hasta x Con Paso 1 Hacer
				Escribir "usuario";
				Para j=0 Hasta 8 Con Paso 1 Hacer
					Escribir Array[i,j];
				Fin Para
			Fin Para
FinAlgoritmo
