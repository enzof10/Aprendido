# %%

from pprint import pprint

precios = {}
cabezera = ["Fruta", "Precio"]
tipos = [str, float]
file = open("precios.csv", "r" encoding="utf-8")
records = []
for line in file:
    lina = line.replace("\n", "")


# %%


cadena = "Hola, mundo cruel"
print(cadena.split(","))

lista = ["banana", "100.10"]
tipos = [str, float]
datos = zip (tipos, lista)
for func, val in zip(tipos, lista):
    converted = func(val)




print(converted, end=" ")


# %%
# - Conjuntos SET
#  
# - Import (manejo de libs)
# - Manejo de archivos (open, os, os.path vs pathlib, csv)
lis2 = []
for i in range(50):
    lis2.append(i)

lista_creada = [i for i in range(10)]
# set_mutable1 = set(['Uno','Dos','Tres'])
set_mutable1 = set([4, 3, 11, 7, 5, 2, 1, 4])
print('Primer Conjunto', set_mutable1)

set_mutable2 = set([11, 5, 9, 2, 4, 8])
print('Segundo Conjunto', set_mutable2)

# Muestra las diferencias entre 2 conjuntos
print('Diferencia ', set_mutable1.difference(set_mutable2))
print(set_mutable1)

print('Diferencia y Update ', set_mutable1.difference_update(set_mutable2))
print('Primer Conjunto', set_mutable1)


print('Ver tipo de dato Original', lista_creada, type(lista_creada))

lista_creada = set(lista_creada)

lista_creada.discard(5)

print('Ver tipo de dato Cambiado', lista_creada, type(lista_creada))
# %%

# Ejemplo de importar librerias externas
# para instalarla usar:
#    pip install reportlab
# Desde el CMD

from reportlab.pdfgen import canvas
from reportlab.lib.pag


