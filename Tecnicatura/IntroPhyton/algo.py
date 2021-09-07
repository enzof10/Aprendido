# %%
def materias_fun():
    materias = dict()
    nada = []
    nameMateria = input("Ingrese la materia(campo vacio para no ingresar mas): ")
    qualificationMateria = input("Ingrese la nota de la materia")
    # comprobamos que no sea un campo vacio para que funcione el algoritmo
    if qualificationMateria != "":
        qualificationMateria = int(qualificationMateria)
    #Crea el diccionario
    while nameMateria != "":
        print
        materias[nameMateria] = qualificationMateria
        nameMateria = input("Ingrese la materia(campo vacio para no ingresar mas): ")
        if nameMateria == "":
            break
        qualificationMateria = input("Ingrese la nota de la materia: ")
    # [materias.pop(key) for key in[7]]
    print(materias)
    for name, notas in materias.items():
        if int(notas)>4:
           nada.append(name)
           print(nada)
           print(notas)
        #     nada.append(name)
    for i in nada:
        materias.pop(i)

            
    for mat, notas in materias.items():
        print(f"Tiene que recuperar {mat} porque su nota es: {notas}")

materias_fun()

# %%

