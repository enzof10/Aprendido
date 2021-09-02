# %%
frutas = ("naranja","platano","guayaba")
# con parentessi
# acceder
print(frutas[0])
print(frutas[-1])
print(frutas[0:2])
for fr in frutas:
    print(fr, end=" ")
# sin incluir el ultimo indice
# hay que poner una coma al final si solo va s er de un solo elemento 
fruta = ("algo",)

# para modificar la tupla primero tenemos que transformarla a lista
listaFrutas = list(frutas)
listaFrutas[0] = "pera"
frutas = tuple(listaFrutas)
print("\n", frutas)
del frutas


# %%
tupla = (13, 1, 8, 3, 2, 5, 8)
lista = ["algo"]
for i in tupla:
    if i<5:
        lista.append(i)
print(lista)
# %%
tp=(13, 1, 8, 3, 2, 5, 8)

a=[i for i in tp if i < 5]

print(a)

# %%
# un set no permite elementos duplicados

planetas = {"marte","jupiter","venus"}
print(planetas)
# revisar si un elemetno esta presente en un set
print("marte" in planetas)
# devuelve verdadero

# agregar mas elementos al set
planetas.add("tierra")
print(planetas)
# no soporta elementos duplicados
planetas.add("tierra")
print(planetas)
# eliminar elementos con remove, posiblemente arroje error
planetas.remove("marte")
print(planetas)
# eliminar elementos sin que arroje errores
planetas.discard("marte")
planetas.clear()
print(planetas)




# %%
cosas = []
for i in range(1,7):
    cositas = input("Ingrese las cosas")
    cosas[i] = cositas
print(cosas)
# %%
