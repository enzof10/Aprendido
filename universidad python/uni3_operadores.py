from os import execl


operandoA = 3
operandoB = 2
suma = operandoA + operandoB
print("resultado de la suma:", suma)
print(f"resultado sum: {suma}")
resta = operandoA - operandoB
print(f"resultado de la resta es: {resta}")
multiplicacion = operandoB * operandoA
print(f"resultado de la multipliacion es: {multiplicacion}")
division = operandoA / operandoB
print(f"resultado de la divisiom es: {division}")
diviEntero = operandoA // operandoB
print(f"resultado de la divison entera es: {diviEntero}")
modulo = operandoA % operandoB
print(f"resultado del modulo es: {modulo}")
exponente  = operandoA ** operandoB
print(f"resultado del exponente es: {execl}")


# Rectangulo
alto = int(input("Proporciona el alto del rectangulo"))
ancho = int(input("Proporciona el ancho del rectangulo"))
area = alto * ancho
perimetro = 2*(alto + ancho)
print("El area es:", area,"y el preimetro es:", perimetro)

# operadores de asignacion
num = 12
# operador de reasicnacion
num +=2
print(num)

a = 2
b  =4

respuesta = a == b
print(f"el resultado de == es", respuesta)
respuesta = a != b
print(f"la comparacion de != es", respuesta)


edad  = int(input("introduce tu edad"))

veintes = edad >= 20 and edad < 30

treintas = edad>=30 and edad < 40
if veintes or treintas:
    print('dentro de rando (20\'s o (30\'s')
else:
    print("No esta dentro de los 20's ni 30's")


numero1 = int(input("Proporciona el numero1: "))
numero2 = int(input("Proporciona el numero2:"))

if numero1>numero2:
    print(f"El numero mayor es: {numero1}")
elif numero2>numero1:
    print(f"El numero mayor es: {numero2}")
else:
    print("Loss numeros son iguales") 