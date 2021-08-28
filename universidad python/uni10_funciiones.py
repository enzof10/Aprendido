# %%
def mi_funcion2(nombre, apellido):
    print(f"Saludos {apellido} {nombre}  desde mi funcion")


mi_funcion2("juan", "perez")
mi_funcion2("lara", "karla")
# %%

def sumar(a, b):
    return a + b
resultado = sumar (3, 8)
print(f"Resultado de la suma {resultado}")
# pasar argumentos a una funcion 
print(f"Resultado de sumas 10 y 8 {sumar(10, 8)}")

# valores por default para la funcion con pista del tipo de tdato que va a regresar la funcion
def sumar2(c = 0, d = 0) -> int:
    return c + d
print(f"Resultado de sumar valores por default {sumar2()}")
print(f"Resultado de sumar 10 y 8= {sumar2(10, 8)}")

# %%
# definir una funcion si saber la cantidad de elementos que va a tener la tupla
# podemos encontrar args en vez de cualquier otra cosa
def listaNombres(*nombres):
    for nombre in nombres:
        print(nombre)

listaNombres("juan", "carla", "maria", "hernesto")
listaNombres("laura","carlos")
# %%

#Definición de la función para sumar valores
def sumar_valores(*args):
    resultado = 0
    for valor in args:
        resultado += valor
    return resultado

#LLamada de la función
print(sumar_valores(3,5,9,23,23))
# %%
def multiplicar_valores(*args):
    resultado = 1
    for valor in args:
        resultado *= valor
    return resultado

print(multiplicar_valores(2,8,1))

# %%

# en vez de args en una funcion comun, en el diccionario se ponen dos **
def listaTerminos(**terminos):
    for llave, valor in terminos.items():
        print(f"{llave}: {valor}")

listaTerminos(IDE="integrated developed environment")
listaTerminos(DBMS="Database management system", PK="Primary key")
# %%

def deplegarNombres(nombres):
    for nombre in nombres:
        print(nombre)
nombres = ("juan","carla","gulliermo")
deplegarNombres(nombres)
nombres = ("carlos")
deplegarNombres(nombres)
nombres = ((10,11))
deplegarNombres(nombres)

# %%

def factorial(numero):
    if numero!=1:
        return numero *factorial(numero-1)
    else:
        return 1
resultado = factorial(6)
print(f"el factorial de 5 es {resultado}")
# %%

def imprimir_numero_recursivo(numero):
    if numero >= 1:
        print(numero)
        imprimir_numero_recursivo(numero-1)
imprimir_numero_recursivo(5)

# %%

def calcular_total(pagoSinImpuesto, impuesto):
    return pagoSinImpuesto*(impuesto/100+1)

imp = int(input("Ingrese el porcentaje del impuesto"))
pagoSinIm = int(input("Ingrese el monto a pagar"))
pagoTotal = calcular_total(pagoSinIm, imp)
print(f"El pago total incluyendo impuesto es de {pagoTotal}")

# %%
# conversor de celsius a fahrenheit y viceversa

def celsius_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def fahrenheit_celsius(fahrenheit):
    return (fahrenheit-32) * 5/9

pruebaCelsius = celsius_fahrenheit(80)
pruebaFahrenheit = fahrenheit_celsius(pruebaCelsius)
print(f"Celsus convertido: {pruebaCelsius}. Fahrenheit convertido: {pruebaFahrenheit}")

celsiusIngresado = int(input("Ingrese los grados celsius que quiera convertir a fahrenheit"))
print(f"La conversion de {celsiusIngresado} a fahrenheit es: {celsius_fahrenheit(celsiusIngresado)}")


fahrenheitIngresado = int(input("Ingrese los grados fahrenheit que quiera convertir a fahrenheit"))
print(f"La conversion de {fahrenheitIngresado} a celsius es: {fahrenheit_celsius(fahrenheitIngresado)}")

# %%

