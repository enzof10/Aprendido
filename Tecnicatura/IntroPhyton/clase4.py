# %%
# formateo de salida de string 
# fomateo % (sirve para cambiar el tipo de dato de los arrays para lo que lo necesite)



multi = 4 * 8
resta = 8 - 2
suma = 3 + 7
print(f'la suma de 3 + 7 es {suma}')

strSalida = 'las operaciones dieron : %s %d %f' %(suma, resta, multi)
print(strSalida)
# las operaciones dieron : 10 6 32.000000 
# %%

multi = 4 * 8
resta = 8 - 2
suma = 3 + 7
print(f'la suma de 3 + 7 es {suma}')

strSalida = 'las operaciones dieron : {0}  {1}  {3:^70}' .format(suma, resta, multi)
print(strSalida)

print(strSalida)
strSalida = 'las operaciones dieron : {2}{1}{0}' .format(suma, resta, multi)

# %%

cadena = "raiz cuadrad de dos"
print("{:>30}". format(cadena))
# uso 30 lufgares para escribir la cadena dejando espacios de izquierda a derceha

print("{:<30}". format(cadena))
# lo mismo pero a la izquierda

print("{:^70}". format(cadena))
# lo mismo pero al centro

print("{:^3}". format(cadena))
# con menos de la cantidad de la cadena no da bola

print(len(cadena))
# len para saber la longitud

print(len("{:^70}". format(cadena)))

# %%
# primero redondea porque corta el numero
numero = 2.77878787
print(f'{numero:>20.2}')

# aca redondea dos numeros depues de la coma con el float 
print(f'{numero:>20.2f}')

print(f'{str(numero):>20.2s}')
# aca lo paso a string
# %%

# ciclo while
cadena = "esto des un algo"
for i in cadena:
    print(i, end="")

print()


listaFrutas = ["adriano", "frambuesa", "banana", "grosella", "alguito"]
cont = 0
while cont<len(listaFrutas):
    print(listaFrutas[cont], end=" ")
    listaFrutas[cont]= "otra cosa"
    print(listaFrutas[cont], end="")
    cont+=1
print()
print(listaFrutas)
for i, l in enumerate(cadena):
    print(i, l, end="")

print()

# %%

listaFrutas = ["adriano", "frambuesa", "banana", "grosella", "alguito"]
tuplaFrutas = ("adriano", "frambuesa", "banana", "grosella", "alguito")


# %%
