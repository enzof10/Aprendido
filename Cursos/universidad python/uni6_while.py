# condicion = True

# while condicion:
#     print("ejecutando el ciclo while")
# else:
#     print("Fin del ciclo while")
#%%
contador = 0

while contador < 3:
    print(contador)
    contador += 1
else:
    print("Fin del ciclo while")
# %%

contador = 0

while contador<=10:
    print(contador)
    contador += 1

# %%
contador = 5

while contador>=0:
    print(contador)
    contador -= 1

# %%
# una cadena es un arreglo de caracteres
cadena = "Hola"
for letra in cadena:
    print(letra)
# %%

for letra in "Holanda":
    if letra == "a":
        print(f"Letra etcontrada: {letra}")
        break
else:
    print("se imprimio una sola palabra")
# %%

for i in range(6):
    if i % 2 != 0:
        continue
    print(f"valor: {i}")

print(i)



# %%
