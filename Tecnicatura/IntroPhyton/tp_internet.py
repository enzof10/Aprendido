# %%

def tabla_del_10():
    for i in range(1,11):
       for b in range(1,10):
           print(b * i, end= " ")
       print()

tabla_del_10()

# %%
# triangulo rectangulo impar o par
def piramide(altura):
    for i in range(-1, altura + 1, 2):
        for j in range(0, i, 2):
            print(i, end=" ")
            i -= 2
        print()

piramide(9)
# %%
# numeros de loteria ordenados 
def numLoteria():
    listNumeros = []
    cant = 1
    numero = 0
    while numero !="":
        numero = input("Ingrese los numeros de la loteria, para terminar ingrese el campo vasio")
        if numero !="":
            numero = int(numero)
            listNumeros.append(numero)
            cant += 1
        print(listNumeros)
    copia = list(listNumeros)
    copia2 = list(listNumeros)
    long = len(listNumeros)

    # ordenamiento de numeros
    for position in range(long):
        for position2 in range(long):
            if listNumeros[position]<listNumeros[position2]:
                temp = listNumeros[position2]
                listNumeros[position2] = listNumeros[position]
                listNumeros[position] = temp

 
    for position in range(long):
        for position2 in range(position, long):
            if copia[position]>copia[position2]:
                temp = copia[position2]
                copia[position2] = copia[position]
                copia[position] = temp

    for position in range(long):
        position2 = position +1
        for position2 in range(position, long):
            if copia2[position]>copia2[position2]:
                temp = copia2[position]
                copia2[position] = copia2[position2] 
                copia2[position2] = temp

    print(listNumeros)
    print(copia)
    print(copia2)


    
numLoteria()

# %%
def materias_fun():
    materias = dict() 
    nameMateria = input("Ingrese la materia(campo vacio para no ingresar mas): ")
    qualificationMateria = input("Ingrese la nota de la materia")
    while nameMateria != "":
        print
        materias[nameMateria] = qualificationMateria
        nameMateria = input("Ingrese la materia(campo vacio para no ingresar mas): ")
        if nameMateria == "":
            break
        qualificationMateria = input("Ingrese la nota de la materia: ")
    for mat, notas in materias.items():
        print(f"La nota de {mat} es: {notas}")

materias_fun()


# %%
def function_lotery():
    numberLotery = int(input("Ingrese los numeros de la loteria(vacio para terminar): "))
    listLotery = []
    while numberLotery != "":
        listLotery.append(numberLotery)
        numberLotery = input("Ingrese los numeros de la loteria(vacio para terminar): ")
        if numberLotery != "":
            numberLotery = int(numberLotery)

    for i in range(len(listLotery)):
        for j in range(i, len(listLotery)):
            if listLotery[i] > listLotery[j]:
                tem = listLotery[i]
                listLotery[i] = listLotery[j]
                listLotery[j] = tem


    for i in range(1, len(listLotery)):
        print(f"{listLotery[-i]}, " , end=)
    print(f"{listLotery[0]}" , end="")
    

function_lotery()

2# %%
# %%
