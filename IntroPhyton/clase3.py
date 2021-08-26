# numeroUno =  int(input("Ingrese el numero 1: "))
# numeroDos = int(input("Ingrese el numero 2: "))

for i in range(0,10):
    print(i)

recibimiento = "hola gatito"
# recibimiento = range(4)
for i in recibimiento(0,4):
    print(i)

listaFrutas = ["banana", "manzanas", "peras", "tomates"]
for algoQueQuieraRepresentar in listaFrutas:
    print (algoQueQuieraRepresentar)

cadena = "le voy a cambiar las o por las a"
cadenaSalida = ""
for letra in cadena:
    if letra == "o":
        letra = "a"
    cadenaSalida = cadenaSalida + letra
print(cadena, cadenaSalida)




numeroUno =  int(input("Ingrese el numero 1: "))
numeroDos = int(input("Ingrese el numero 2: "))
a = 0

def suma_multiple(*args):
    """esta funcion suma muchos valores"""
    resultado = a
    for arg in args:
        resultado = resultado + arg
    return resultado
print(suma_multiple(numeroUno , numeroDos, 3, 4))


# tipos de datos
# entero 
print(2)
# real o flotante 
print(2.0)
# string o cadena
print("2.0")
# lista se define usando [] corchetes, es mutable 
mmutable = ["2",".","0"]
print(mmutable)
print("primero mutable sin mutar")
for mutable in mmutable:
    print(mutable)
print("primero mutable mutado")
for mutable in mmutable:
    mmutable = ["otra", "cosa", "mariposa"]
    print(mmutable)
# tupla se declara usando parentesis comunes, es inmutable
inmutable = ("2",".","0")
print(inmutable)
print("primero inmutable sin mutar")
for inm in inmutable:
    print(inm)
print("primero mutable tratando de mutar")
for inm in inmutable:
    inmutable = ("otra", "cosa", "mariposa")
    print(inm)

