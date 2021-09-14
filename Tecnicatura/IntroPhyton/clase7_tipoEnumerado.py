# %%
from enum import Enum
from os import error

class Colores(Enum):
    green = 1
    red = 2
    blue = 3

class Rspuestas(Enum):
    si = "si"
    no = "no"

dato = input("Diga si o no")
if dato == Rspuestas.si:
    print("si")
elif dato == Rspuestas.no.value:
    print("no")

# %%
from enum import Enum
class Abecedarios(Enum):
    vocales = "aeiouAEIOU"
    consonantes = "bcdfghijklmnñpqrstvwxyz"
    numeros = "0123478965"


cadena = input("Ingrese una palabra o frase")
caracteres = 0
# recorre las dos cosas a la vez
for datos in Abecedarios:
    print(datos.value)

# for letra in cadena:
#     if letra in Abecedarios.vocales.value or letra in Abecedarios.consonantes:
#         caracteres += 1

for letra in cadena:
    for items in Abecedarios:
        if letra in items.value:
            caracteres += 1

print (caracteres)
print(caracteres, len(cadena))


# %%

class Conexion(Enum):
    server = "localhost"
    user = "root"
    password = "1234"
    database = "agenda"
# %%

import csv
from pprint import pprint

def leer_datos(nombre_archivo):
    """Devuelve una lista de diccionacios con la iformacion de datos especificdas"""

    datos_dic = []
    try:
        f = open(nombre_archivo, "rt", encoding="utf8")
        filas = csv.reader(f)
        cabecera = next
        for fila in filas:
            item = dict(zip(cabecera, fila))
            datos_dic.append(item)
        f.close()
        return datos_dic
    except Exception as e:
        print(f"A sucedido un Error {e}")
        return False

mis_datos = leer_datos("Bla_bla.csv")

print(mis_datos)
# %%

# intenta significa try
errores = False
try:

    dato0 = 0.
    dato1 = 3
    dato2 = "4"
    
    suma = dato1 + dato0 + dato2
# capturo el error con la clase Exception
except Exception as e:
    errores = True
    if type(e) == TypeError:
        print("Hay tipos de datos incompatibles")
    elif type(e) == NameError:
        print("Nombre de datos erroneos")
    print("Error de datos", type(e))
finally:
    print("La salida fue exitosa")
    if errores: print("pero con errores")
# %%
