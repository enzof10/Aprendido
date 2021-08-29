Algoritmo sin_titulo
	Definir v,n,i,j,t,k como enteros;
	Dimension v[100];
	Escribir "digite el numero de elementos del vector";
	Leer n;
	
	para i<-1 hasta n Con Paso 1 Hacer
		escribir Sin Saltar "digite el vector en su posicion" i;
		Leer v(i);
	FinPara;
	
	Para  i<-1 hasta n con paso 1 Hacer
		para j<-i hasta n Con Paso 1 Hacer
			si v(i) > v(j)
				Escribir "cambiando" v(i), "por" v(j);
				t<- v(i);
				v(I) <- v(j);
				v(j)<-t;
			FinSi
		FinPara
		Para  k<-1 Hasta n Con Paso 1 Hacer
			Escribir "despues del ciclo" i "el vector queda en pos" k " " v(k);
		FinPara
	FinPara
	Para k<-1 hasta n Con Paso 1 Hacer
		Escribir "finalmente el vector queda en pos" k " " v(k);
	FinPara
FinAlgoritmo
