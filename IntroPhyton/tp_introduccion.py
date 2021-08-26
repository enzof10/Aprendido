def ej01():
     print("hello word")
ej01()



def ej02():
    SUMA = 3 + 5
    print(SUMA)
ej02()



def ej03():
   nombreUsuario =input("ingrese nombre de usuario")
   print("Hello ", nombreUsuario)
ej03()



def ej04():
    num1 = int(input(" el numero 1"))
    num2 = int(input(" el numero 2"))
    resultado = num1 + num2
    print(resultado)
ej04()



def ej05():
    num1 = int(input(" el numero 1"))
    num2 = int(input(" el numero 2"))
    if num1==num2:
       print("Los numeros son iguales")
    else:
       if num1>num2:
          print("El numero ", num1, " es el mayor")
       else:
          print("El numero ", num2, " es el mayor")
ej05()



def ej06():
    num1 = int(input(" el numero 1"))
    num2 = int(input(" el numero 2"))
    num3 = int(input(" el numero 3"))
    listaNumeros = [num1,num2,num3]
    Mayor = None
    for numero in listaNumeros:
        if Mayor==None:
           Mayor = numero
        elif numero>Mayor:
           Mayor = numero
    print("El numero mayor es ", Mayor)
ej06()



def ej07():
   num = int(input("ingrese un numero"))
   if num%2==0:
      print("El numero ", num, " es divisible por 2")
ej07()



def ej08():
   num = int(input("ingrese un numero"))
   if num%2==0 or num%3==0 or num%5==0 or num%7==0:
      print("El numero ", num, " es divisible por alguno de los numeros" )
ej08()



def ej09():
   num = int(input("ingrese un numero"))
   divisores = (2, 3, 5, 7)
   for div in divisores:
      if num%div==0:
         print("El numero es divisible por" , div)
ej09()


def ej10():
   num = int(input("ingrese un numero"))
   for i in range(2, 10):
      if num%i==0:
         print("El numero es divisible por ", i)
ej10()




def ej11():
   primo = True
   num = int(input("ingrese un numero"))
   for i in range(2, num):
      if num%i==0 :
         primo = False
   if primo:
      print("el numero ", num, " es primo")
   else:
      print("el numero ", num, " no es primo")
ej11()



def ej12():
   nota = int(input("ingrese un numero"))
   if 0<nota<3:
      print("Muy deficiente")
   elif 3<=nota<5:
      print("insuficiente")
   elif 5==nota:
      print("Suficiente")
   elif 6==nota:
      print("bien")
   elif 7<=nota<9:
      print("notable")
   elif 9<=nota<=10:
      print("Sobresaliente")
ej12()



def ej13():
   for columna in range(1, 31):
      for fila in range(1, columna+1):
         print(columna, end=" ")
      print()
ej13()


def ej14():
   numPiramide = int(input("ingrese un numero para la piramide invertida"))
   for columna in range(1, numPiramide+1):
      for fila in range(1, numPiramide+1):
        print(numPiramide, end=" ")
      print()
      numPiramide-=1
   print()
ej14()




def ej15():
   for i in range(1, 501):
      if not(i%4==0) and not(i%9==0):
         print(i)
      else:
         if i%4==0:
          print(i,"(multiplo de 4)")
         else:
            print(i,"(multiplo de 9)")
      if i%5==0:
         for l in range(0,20):
            print("-", end="")
         print()
ej15()