//    Lee los tres lados de un triangulo rectangulo, determina 
// si corresponden (por Pitargoras) y en caso afirmativo 
// calcula el area

Algoritmo TrianguloRectangulo
	
	
	// cargar datos
	Definir l1,l2,l3 Como Real;
	Repetir
		Escribir "Ingrese el lado 1:";
		Leer l1;
		Escribir "Ingrese el lado 2:";
		Leer l2;
	si l1=l2
		Escribir "no puede ser un triangulo rectamgulo, ingrese otra medida";
	FinSi
Hasta Que l1<>l2;
Escribir "segun las medidas de lado 1 y lado 2 el lado 3 puede ser:";
Escribir "mas grande que lado 1 y  lado 2, opcion 1";
Escribir "o entre lado 1 y 2/ mas chica que lado 1 y 2, opcion 2";
Definir op, a  Como entero;
Leer op ;
si l1<l2
	Segun op Hacer
	1:
		l3<- (l1^2+l2^2)^0.5;
		Escribir "su lado 3 va a ser de" l3;
	2:   l3<- (l2^2-l1^2)^0.5;
		Escribir "su lado 3 va a ser de" l3;
      fin segun
SiNo 
	Segun op hacer
		
		1:
		   l3<-(l1^2+l2^2)^0.5;
		    Escribir "su lado 3 va a ser de" l3;
		2:
			l3<-(l1^2-l2^2)^0.5;
			Escribir "su lado 3 va a ser de" l3;
			
	FinSegun
fin si
	
	// encontrar la hipotenusa (mayor lado)
	Definir cat1,cat2,hip Como Real;
	Si l1>l2 Entonces
		cat1<-l2;
		Si l1>l3 Entonces
			hip<-l1;
			cat2<-l3;
		SiNo
			hip<-l3;
			cat2<-l1;
		FinSi
	SiNo
		cat1<-l1;
		Si l2>l3 Entonces
			hip<-l2;
			cat2<-l3;
		SiNo
			hip<-l3;
			cat2<-l2;
		FinSi
	FinSi
	
	// ver si cumple con Pitagoras
	Si hip^2 = cat1^2 + cat2^2 Entonces
		// calcualar area
		Definir area como real;
		area<-(cat1*cat2)/2;
		Escribir "El area es: ",area;
	SiNo
		Escribir "No es un triangulo rectangulo.";
	FinSi
	
FinAlgoritmo