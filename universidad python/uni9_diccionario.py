# %%
# diccionario compuesto por una llave y un valor
# tampovo tine indices
diccionario = {
    "IDE" : "integrated devopep envionment",
    "OOP" : "Objet oriented programming",
    "DBMS" : "Database management system"
}
print(diccionario)
# largo
print(len(diccionario))
# para acceder debemos ralizarlo por filtrado
print( diccionario["IDE"])
# otra forma de trae un elemeno
print(diccionario.get("OOP"))
# MODIFICAR ELEMENTOS DEL DICCIONARIO

diccionario["OOP"] = "otra cosa mariposa"
print(diccionario)

# devuelve todo por
for termino, valor in diccionario.items():
    print(termino, valor)

for termino in diccionario:
    print(termino)

for termino in diccionario.keys():
    print(termino)

for valor in diccionario.values():
    print(valor)

print("IDE" in diccionario)
# no es posible agregar llaves duplicadas
diccionario["PK"] = "Primary key"
print(diccionario)

diccionario.pop("IDE")

print(diccionario)
# para eliminar el contenido
diccionario.clear()
# para eliminar el diccionario
del diccionario
# %%
