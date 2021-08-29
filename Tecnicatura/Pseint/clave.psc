Algoritmo sin_titulo
	Definir contador Como Entero;
	Definir acierto Como Logico;
	Definir clave, eureka Como caracter;
    contador<-0;
    //interruptor
    acierto<-Falso;
    //usamos un interruptor, cuando acertemos,
    //cambiara y la condicion sera falsa
    Mientras (contador<3 Y acierto=falso) Hacer
        //ponemos aqui leer porque con las variables
        //iniciales entra en el bucle
        Escribir "introduce la clave";
        Leer clave;
        si clave="eureka" Entonces
            Escribir "la clave es correcta";
            //el interruptor cambia cuando acertamos
            acierto<-Verdadero;
        FinSi
        contador<-contador+1;
    FinMientras
    //este mensaje solo aparecera si hemos agotado
    //todos los intentos y no hemos acertado
    si (contador=3 Y acierto=falso) Entonces
		Escribir "Ya no tienes mas intentos";
    FinSi
FinAlgoritmo
