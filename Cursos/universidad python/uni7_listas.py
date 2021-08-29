# %%
Nombres = ["juan", "carla", "ricardo", "maria"]
# imprimir lista de nombres
print(Nombres)
# acceder a una ubicacion de la lista
print(Nombres[0])
print(Nombres[1])

# imprimir desde la ultima ubicacion como -1
print(Nombres[-2])
print(Nombres[-1])

# imprimir rango de la lista del 0 incluyendo al 2 sin incluir
print(Nombres[0:2])
# esto es lo mismo porque es desde el inicio
print(Nombres[:2])
# aca desde el 1 hasta el Final
print(Nombres[1:])
Nombres[3] = "ivone"
print(Nombres[3])
# %%
Nombres = ["juan", "carla", "ricardo", "maria"]

print(len(Nombres))
# agregar elemento al final de la lista
Nombres.append("lorenzo")

# inserar un elemento en un indice especifico
# los demas se mueven a la derecha
Nombres.insert(1, "octavio")

for nombre in Nombres:
    print(nombre, end=" ")
print()

# remueve a octavio
Nombres.remove("octavio") 
for nombre in Nombres:
    print(nombre, end=" ")
print()
# remueve el ultimo elemento de la lista
Nombres.pop()
del Nombres[0]

for nombre in Nombres:
    print(nombre, end=" ")
print()

# para eliminar todo
Nombres.clear()
# borrar por completo todo 
del Nombres
print(Nombres)
# %%

for i in range(0, 11):
    if i % 3 == 0:
        print(i)

# %%