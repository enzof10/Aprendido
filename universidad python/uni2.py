# cadenas de caracteres 

miGrupoFavorito = "aerosmit" + " " + "The best rock band"
# concateno con un Text
print("Mi grupo favorito es " + miGrupoFavorito)
# otra forma de concatenar, esta agrega espacio en blanco
print("Mi grupo favorito es:", miGrupoFavorito)

numero1 = "uno"
numero2 = "2"
print("concatenacion:",numero1 + numero2)
print("concatenacion:",int(numero1) + numero2)


numero1 = 1
numero2 = 2
print("suma:", numero1 + numero2)


# tipo bool
MiVariable = True
MiVariable = 3<2

print(MiVariable)

if MiVariable:
    print("El resultado fue verdadero")
else:
    print("El resultado fue falso")

# funcion input solo regresa un tipo string
resultado = input("Escribe un mensaje: ")
print(resultado)


# conversion de entrada de datos
numero1 = int(input("ingrese el primer numero: "))
numero2 = int(input("ingrese el segundo numero: "))
resultado = numero1 + numero2
print("el resultado es :", resultado)


dia = input("como estuvo tu dia(del 1 al 10): ")
print("mi dia estuvo de :", dia)

titulo = input("Proporciona el titulo")
autor = input("Proporciona el autor")
print(titulo,"fue escrito por", autor)