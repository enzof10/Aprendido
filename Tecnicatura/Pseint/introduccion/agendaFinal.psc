Algoritmo AgendaPara
	Definir Array como cadena;
	Definir respuesta Como Caracter;
	Definir i, j, x, z, usuario, baja, modificacion,numOrdena , posMenor, posMayor, l Como Entero;
	Dimension  Array[10, 9];
	Definir apellido, nombre, datoConsulta, datofiltrado, datoOrdena, respuestaOrdena Como Caracter;
	Definir consultaVarios, campo Como Logico;
	x=1;
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
	
	Repetir
		Para i<-x Hasta x Con Paso 1 Hacer
			Para j=0 Hasta 8 Con Paso 1 Hacer
				Escribir "ingrese " Array[0,j] Sin Saltar; 
				Leer apellido;
				Mientras j<6 y (apellido="" o apellido=" ") Hacer
					Escribir "este campo no puede ser nulo";
					Escribir "vuelva a ingresar " Array[0,j] Sin Saltar;
					Leer apellido;
				Fin Mientras
				Array[x,j]<- apellido;
			Fin Para
		Fin Para
		Escribir "¿Desa ingresar un nuevo usuario? (si, no)";
		Leer respuesta;
		Si respuesta="si" Entonces
			x=x+1;
			Limpiar Pantalla;
		FinSi
	Hasta Que respuesta<>"si"
	Limpiar Pantalla;
	Repetir
	Escribir "ingrese la forma que quiere ordenar la agenda(abecedario: apellido, nombre ect)";
	Leer respuestaOrdena;
	//identifica la forma en que va a ordenar los datos de los usuario
		Para j=0 Hasta 8 Con Paso 1 Hacer
			Si Minusculas(respuestaOrdena)=Minusculas(Array[0,j]) Entonces
				numOrdena<-j;
				campo=Verdadero;
			Fin Si
		Fin Para
	Hasta Que campo=Verdadero
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
			datoOrdena<-Array[i,l];
			Array[i, l]<-Array[posMenor,l];
			Array[posMenor,l]<-datoOrdena;
		Fin Para
	Fin Para
	Repetir
		Escribir "¿Desea realizar un alta, baja, modificación o consulta a la agenda?" Sin Saltar;
		Escribir "Responder con la accion que desea realizar o en caso contrario responder no";
		Leer respuesta;
		Mientras Minusculas(respuesta)= "alta" Hacer
			Escribir "entro al alta";
			Repetir
				Para i<-x Hasta x Con Paso 1 Hacer
					x=x+1;
					Para j=0 Hasta 8 Con Paso 1 Hacer
						Escribir "ingrese " Array[0,j] Sin Saltar; 
						Leer apellido;
						Mientras j<6 y (apellido="" o apellido=" ") Hacer
							Escribir "este campo no puede ser nulo";
							Escribir "vuelva a ingresar " Array[0,j] Sin Saltar;
							Leer apellido;
						Fin Mientras
						Array[x,j]<- apellido;
					Fin Para
				Fin Para
				Escribir "¿Desa ingresar un nuevo usuario? (si, no)";
				Leer respuesta;
				Si respuesta="si" Entonces
					usuario=usuario+1;
					x=x+1;
					Limpiar Pantalla;
				FinSi
			Hasta Que respuesta<>"si"
			Limpiar Pantalla;
			respuesta="salirBucle";
			//la funcion no guarda datos de afuera asique pego el ordenamiento otra vez con la misma respues de al principio
			Para j=0 Hasta 8 Con Paso 1 Hacer
				Si Minusculas(respuestaOrdena)=Minusculas(Array[0,j]) Entonces
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
					datoOrdena<-Array[i,l];
					Array[i, l]<-Array[posMenor,l];
					Array[posMenor,l]<-datoOrdena;
				Fin Para
			Fin Para
		Fin Mientras
		Mientras Minusculas(respuesta)= "baja" Hacer
			z=0;
			Repetir
				Escribir "entro al baja";
				Escribir "ingrese el apellido del usuario que quiera eliminar";
				Leer apellido;
				Escribir "ingrese el nombre del usuario que quiera eliminar";
				Leer nombre;
				Para i<-1 Hasta x Con Paso 1 Hacer
					si Minusculas(Array[i,z])=Minusculas(apellido) y Minusculas(Array[i,z+1])=Minusculas(nombre)
						baja<-i;
					finsi
				Fin Para
				//reordenamiento de la agenda
				Si baja<>0 Entonces
					Para i=baja Hasta x-1 Con Paso 1 Hacer
						Para j=0 Hasta 8 Con Paso 1 Hacer
							Array[baja,j]<- Array[baja+1,j];
						Fin Para
						baja=baja+1;
					Fin Para
					Para i=baja hasta baja
						Para j=0 Hasta 8 Con Paso 1 Hacer
							Array[baja,j]<-"";
						Fin Para
					FinPara
					baja<-0;
					x<-x-1;
				Fin Si
				Para i=1 Hasta x Con Paso 1 Hacer
					Para j=0 Hasta 8 Con Paso 1 Hacer
						Escribir Array[0,j] Array[i,j];
					Fin Para
				Fin Para
				Escribir "¿Desa realizar otra baja? (si, no)";
				Leer respuesta;
			Hasta Que respuesta<>"si"
			//identifica la forma en que va a ordenar los datos de los usuarios
			Para j=0 Hasta 8 Con Paso 1 Hacer
				Si Minusculas(respuestaOrdena)=Minusculas(Array[0,j]) Entonces
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
					datoOrdena<-Array[i,l];
					Array[i, l]<-Array[posMenor,l];
					Array[posMenor,l]<-datoOrdena;
				Fin Para
			Fin Para
			Limpiar Pantalla;
			respuesta="salirBucle";
		Fin Mientras
		Mientras Minusculas(respuesta)= "modificacion" Hacer
			Repetir
				Escribir "ingrese el apellido del usuario que quiera modificar";
				Leer apellido;
				Escribir "ingrese el nombre del usuario que quiera modificar";
				Leer nombre;
				Para i<-1 Hasta x Con Paso 1 Hacer
					si Minusculas(Array[i,0])=Minusculas(apellido) y Minusculas(Array[i,1])=Minusculas(nombre)
						modificacion<-i;
					finsi
				Fin Para
				//remplazo de datos
				Escribir "¿desea modificar todo o solo un dato?";
				Leer respuesta;
				si Minusculas(respuesta)="todo"
					Para j=0 Hasta 8 Con Paso 1 Hacer
						Escribir "ingrese nuevo/a" Array[0,j];
						Leer apellido;
						Array[modificacion,j]<-apellido;
					Fin Para
				SiNo
					Escribir "¿que dato desea modificar?";
					Leer respuesta;
					Para j=0 Hasta 8 Con Paso 1 Hacer
						Si Minusculas(Array[0,j])=Minusculas(respuesta) Entonces
							Escribir "escriba el nuevo " array[0,j];
							Leer apellido;
							Array[modificacion,j]<-apellido; 
						Fin Si
					Fin Para
				FinSi
				Para i=1 Hasta x Con Paso 1 Hacer
					Para j=0 Hasta 8 Con Paso 1 Hacer
						Escribir Array[0,j] Array[i,j];
					Fin Para
				Fin Para
				Escribir "¿Desa realizar otra modificacion? (si, no)";
				Leer respuesta;
			Hasta Que respuesta<>"si"
			Limpiar Pantalla;
			respuesta="salirBucle";
		Fin Mientras
		Mientras Minusculas(respuesta)= "consulta" Hacer
			Repetir
				Escribir "¿Desea consultar datos de distintos usuarios a la vez?";
				Leer respuesta;
				Mientras Minusculas(respuesta)= "si" Hacer
					Escribir "¿Desea filtrar los usuarios por algun dato?";
					Leer respuesta;
					Si Minusculas(respuesta)="si" Entonces
						Escribir "ingrese el tipo de dato a filtrar(por apellido, nombre, ect..)";
						Leer datofiltrado;
						//identifica la que tipo de dato va a filtrar
						Para i=0 Hasta 8 Con Paso 1 Hacer
							Si Minusculas(array[0,i])=datofiltrado Entonces
								z<-i;
								Escribir "ingrese " array[0,z] " para filtrar los usuarios";
								Leer apellido;
								//identifica si el dato ingresado es igual a alguno almacenado
								Para i=1 Hasta x Con Paso 1 Hacer
									Si Minusculas(Array[i,z])=apellido Entonces
										Para j=0 Hasta 8 Con Paso 1 Hacer
											Escribir Array[0,j] " de usuario " Array[i,j];
										Fin Para
										Escribir "Coincide con:";
									Fin Si
								Fin Para
							Fin Si
						Fin Para
					SiNo
						Para i=1 Hasta x Con Paso 1 Hacer
							Escribir "Usuario numero" i;
							Para j=0 Hasta 8 Con Paso 1 Hacer
								Escribir Array[0,j] " de usuario " Array[i,j];
							Fin Para
						Fin Para
					Fin Si
					respuesta="salirBucle";
					consultaVarios=Falso;
				FinMientras
				Si consultaVarios Entonces
				Escribir "eligio consultar los datos de un solo usuario";
				Escribir "¿desea consultar uno o todos los datos(uno o )?";
				Leer respuesta;
				si Minusculas(respuesta)="uno"
					Escribir "ingrese el apellido del usuario a consultar";
					Leer apellido;
					Escribir "Ingrese el nombre del usuario a consultar";
					Leer nombre;
					Escribir "ingrese el dato que desea saber";
					Leer datoConsulta;
					Para i=1 Hasta x Con Paso 1 Hacer
						Si Minusculas(Array[i,0])=Minusculas(apellido) o Minusculas(array[i,1])=Minusculas(nombre) Entonces
							Para j=0 Hasta 8 Con Paso 1 Hacer
								Si Minusculas(Array[0,j])=Minusculas(datoConsulta) Entonces
									Escribir Array[0,j] " de usuario " Array[i,j];
								Fin Si
							Fin Para
						Fin Si
					Fin Para
				SiNo
					//acordarse de optimizar el recorrido para que lo haga una sola vez y despues pregunte si desea filtrar varios usuarios
					Para i=1 Hasta x Con Paso 1 Hacer
						Si Minusculas(Array[i,0])=Minusculas(apellido) y Minusculas(array[i,1])=Minusculas(apellido) Entonces
							Para j=0 Hasta 8 Con Paso 1 Hacer
								Escribir Array[0,j] " de usuario " Array[i,j];
							Fin Para
						Fin Si
					Fin Para
				FinSi
				Escribir "¿Desea realizar otra consulta?";
				Leer respuesta;
			Fin Si
			Hasta Que Minusculas(respuesta)<>"si";
			respuesta="salirBucle";
		Fin Mientras
	Hasta Que respuesta<>"salirBucle";
	
FinAlgoritmo
