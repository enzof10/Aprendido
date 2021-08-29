Proceso piedra_papel_tijeras
	Definir ronda,rondajugador,rondaordenador,puntosjugador,puntosordenador,respuesta,respuesta2 como numerico;
	Definir nombre,respuestajugador,respuestaordenador,opcion como cadena;
	Definir salir Como Logico;
	Definir humano, ordenador Como Caracter
	Escribir "ingrese su nombre:"
	Leer nombre
	ronda <- 1;
	rondajugador<-0;
	rondaordenador<-0;
	puntosjugador<-0;
	puntosordenador<-0;
	Repetir
		Escribir "ronda: " ronda
		Repetir
			Borrar Pantalla;
			Escribir "ronda;" ronda
			Escribir "rondas " nombre ": " rondajugador " rondas ordenador: " rondaordenador
			Escribir "puntos " nombre ": ",puntosjugador " puntos ordenador:",puntosordenador;
			Escribir "turno de ",nombre;
			Escribir "Eliga piedra:1,Papel:2 o Tijeras:3";
			Leer respuesta;
			Segun respuesta hacer
				Caso 1: respuestajugador<-"Piedra";
				Caso 2: respuestajugador<-"Papel";
				Caso 3: respuestajugador<-"Tijeras";
			FinSegun
			Escribir "Elegiste ",respuestajugador;
			Escribir "turno del ordenador";
			respuesta2<-azar(2)+1;
			Segun respuesta2 hacer
				Caso 1: respuestaordenador<-"Piedra";
				Caso 2: respuestaordenador<-"Papel";
				Caso 3: respuestaordenador<-"Tijeras";
			FinSegun
			Esperar 1 Segundos;
			Escribir "El ordenador ha elegido ",respuestaordenador;
			Esperar 3 Segundos;
			si respuesta=respuesta2 Entonces
				Escribir "Empate";
			SiNo
				si (respuesta=3& respuesta2=2)o(respuesta=2 & respuesta2=1)o (respuesta=1 & respuesta2=3)Entonces
					Escribir "Ganador:",nombre;
					Esperar 1 Segundo
					puntosjugador= puntosjugador+1
				SiNo
					Escribir "ganador ordenador";
					puntosordenador= puntosordenador+1
					Esperar 1 Segundo
				FinSi
			FinSi
		Hasta Que puntosjugador+puntosordenador=3
		si puntosjugador < puntosordenador
			rondaordenador= rondaordenador+1
			Escribir " ordenador gano mejor de 3"
			Esperar 1 Segundo
			Escribir " ganador de ronda: ordenador" 
			Esperar 1 segundo
		SiNo
			rondajugador= rondajugador+1
				Escribir nombre " gano mejor de 3"
				Escribir "ganador de ronda: " nombre
				Esperar 1 Segundo
				
			FinSi
			puntosjugador= 0
			puntosordenador= 0
			ronda<- ronda+1 
     Hasta Que rondajugador+rondaordenador=10
	
FinProceso
