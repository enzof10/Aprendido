# %%
 # conjuntos set 
# compresion de listas
lista2 = []
for i in range(40):
    lista2.append(i)


lisa_creada = [i for i in range(10)]
set_mutable = set([2, 4, 1, 8, 9])
print(set_mutable, lisa_creada, lista2)


set_mutable2 = ([4, 1, 9, 8, 2])
set_mutable.add(23)
set_mutable.add("algo")
print(set_mutable)
set_mutable.add(12)
print(set_mutable)

set_mutable = set_mutable.difference(set_mutable2)

print(f"set mutable 2 {set_mutable2}")
print(set_mutable)


print(lisa_creada, type(lisa_creada))
lisa_creada = set(lisa_creada)
print(lisa_creada, type(lisa_creada))


# %%
