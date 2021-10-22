
# %%
mensajelados = "Ingrese un lado"
def triangulo(lado1, lado2, lado3, operacion):
    """Esta funcion devuelve el perimetro o area de un triangulo"""

    paraArea = [lado1, lado2, lado3]
    paraArea.sort()
    if operacion == "perimetro":
        return lado1 + lado2 + lado3
    elif operacion == "area":
        return paraArea[0] * paraArea[1]/2
    else:
        print("La operacion ingresada no esta soportada")



def rectangulo(lado1, lado2, operacion):
    """Esta funcion devuelve el perimetro o area de un rectangulo"""
    if operacion == "perimetro":
        return lado1 * 2 + lado2 * 2
    elif operacion == "area":
        return lado1 * lado2
    else:
        print("La operacion ingresada no esta soportada")


def circulo(radio, operacion):
    """Esta funcion devuelve el perimetro o area de un circulo"""
    from math import pi
    if operacion == "area":
        return pi * radio **2  
    elif operacion == "perimetro":
        return 2 * pi * radio
    else:
        print("La operacion ingresada no esta soportada")

def funcion_figura(figura, operacion):
    """Esta funcion identifica la figura y la asigna a su respectiva funcion"""
    if figura == "triangulo":
        lado1 = int(input("ingrese un lado"))
        lado2 = int(input("ingrese un lado"))
        lado3 = int(input("ingrese un lado"))
        return triangulo(lado1, lado2, lado3, operacion)
    elif figura == "rectangulo":
        lado1 = int(input("ingrese un lado"))
        lado2 = int(input("ingrese un lado"))
        return rectangulo(lado1, lado2, operacion)
    else:
        radio = int(input("Ingrese el radio"))
        return circulo(radio, operacion)


comprueba = True
while comprueba:
    figura = input("Ingrese la figura")
    if figura == "triangulo" or figura == "circulo" or figura == "triangulo":
        operacion = input("Ingrese la operacion que desea hacer")
        impresion = funcion_figura(figura, operacion)
        comprueba = False
    else:
        print("La figura ingresada no es valida")
        print("Debe ingresar la figura nuevamente")
        comprueba = True

print(f"El calculo del {operacion} del {figura} es: {impresion}")

# %%
