import math
import os 

# de la libreria osea from prpint importo lo otro y le pongo alias
from pprint import pprint as pp1

# importo el numero pi de la libreria math
from math import pi

# definition para defnir procedimientos
def borrar_pantalla():
   os.system("cls")


print("hola clase del lunes 11/08/2021")
intNumero = 10_000_00
intOtroNumero = 10_000_000_000
intResultado = intOtroNumero * intNumero
print(intResultado)
# f significa format
print(f'el resultado {intResultado} es de tipo {type(intResultado)}')

# todo lo que ingrese por la funcion input va a ser un string asique lo convierto a numero
strIngreso = int(input("Ingrese un valor numerico "))

print(type(strIngreso))
# aca lo convierto otra vez a string
print(type(str(strIngreso)))

# # suma sin que retorne un valor
# def suma(a, b):
#   print(numeroDos + numeroUno)

# # suma si quiero que retorne un valor con la palabra return
# # mala practica retornar dos valores que son globales a la funcion, no locales
# def suma_return(a, b):
#     '''esta funcion suma dos valores'''
#     return numeroDos + numeroUno
# # suma con dos valores, asi no de debe hacer
# # para que sea valido los valores deben ser pedidos dentro de la funcion
# print(suma(numeroDos,numeroUno))

# suma (opinion: aca no me deja saber cual
# de los nos no es un numero)
def suma_return(a, b):
    '''esta funcion suma dos valores'''
    if type(a and b) == int:
      return a + b
    else:
        return "hay un dato que no es numerico"
# suma con dos valores agenos a la funcion

# suma (opinion: mal planteado
# aca no me deja saber si el segundo dato va a ser numero o no)
def suma_return(a, b):
    '''esta funcion suma dos valores'''
    if type(a) == int:
        if type(b) == int:
          return a + b
        else:
            return "el segundo dato no es un numerìco"
    else:
        return "El primer dato no es un numerìco"

# suma con dos valores agenos a la funcion
def suma_piola(a, b):
    if type(a) == int and type(b) == int:
        return a + b
    elif type(a)==str and type(b)==str: 
        return "ningun dato ingresado es un numero"
    elif type(a) == str:
            return "el primer dato no es un numero"
    elif type(b) == str:
            return "el segundo dato no es un numero" 

# resta 
def resta(a, b):
    '''Esta return una resta'''
    return a - b

# division  
def division(a, b):
    '''esta funcion return una division'''
    return a / b

# multiplicacion 
def multiplicacion(a, b):
    '''Esta funcion return una multiplicacion'''
    return a * b

borrar_pantalla()

# ingresados dos valor por pantallas realizar las operacione matematicas basicas
numeroUno =  int(input("Ingrese el numero 1: "))
numeroDos = int(input("Ingrese el numero 2: "))

print(suma_return(numeroDos,numeroUno))
print(resta(numeroUno,numeroDos))
print(division(  numeroUno,numeroDos))
print(multiplicacion( numeroUno,numeroDos))

print(math.pi)

def funcionF():
    print (f'{numeroUno} es del tipo {type(numeroUno)} ')
# la f me permite agregar variables dentro del contenido y ademas respeta la tabulacion c
# con triples comillas simples


