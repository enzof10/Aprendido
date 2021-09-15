#%%
def leer_datos(nombre_archivo):
    ''' Devuelve una lista de diccionarios con la información del datos del archivo especificado '''
    import csv
    
    datos_dict = []
    try:
        f = open(nombre_archivo, 'rt', encoding='utf8')
        filas = csv.reader(f)
        cabecera = next(filas)
        for fila in filas:
            item =  dict(zip(cabecera,fila))
            datos_dict.append(item)
        f.close()
    except Exception as e:
        datos_dict.append(f'A sucedido un Error {e}')
    finally:
        return datos_dict

def cantidad_ciudades(listaDic):
    """Esta funcion devuelve una lista con la cantidad de ciudades que hay y los ordena alfabeticamente"""
    listaCiudades = []
    cantC = []
    #recorre la cantidad de usuarios dentro de la lista
    for i in range(len(listaDic)):
        #asigo el valor de cada ciudad a una variable
        ciudad = listaDic[i]["ciudad"]
        #comprueba si la ciudad ya esta en la lista que vamos a armar y agrega 1 a la cantidad 
        if ciudad not in listaCiudades:
            listaCiudades.append(ciudad)
            cantC.append(1)
        else:
            posicion = listaCiudades.index(ciudad)
            cantC[posicion] = cantC[posicion] +1
    # ordena los paises, el metodo consite en ir mandando
    # el mas grande al final y descontar lo recorrido
    for i in range(1, len(listaCiudades)):
        # descuento i para que no se recorra nuevamente los ya ordenados
        for j in range(len(listaCiudades)- i):
            if listaCiudades[j] > listaCiudades[j +1] :
                temp = listaCiudades[j]
                listaCiudades[j] = listaCiudades[j + 1]
                listaCiudades[j + 1] = temp
                # ordeno la lista de cantidad de paises aprovechando el indice
                temp2 = cantC[j] 
                cantC[j] = cantC[j +1]
                cantC[j +1] = temp2
        # se puede comprobar que esta bien yendo al archivo escribiendo 
        # el nombre la ciudad y apretando ctr + d para ver cuantas veces 
        # se selecciona
    return (listaCiudades, cantC)
# desglosa el retorno de la funcion 
ciudades, cantidades = cantidad_ciudades(leer_datos('MOCK_DATA (1).csv'))
# paso a diccionario momentaneamente para imprimir
for ciudad, cantidad in zip(ciudades, cantidades):
    print (f"{ciudad} tiene {cantidad}")
# hay ciudades con comillas simples, arreglar el error
# %%