# %%
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

def cantidad_latioamericanos(listaDic, listaAmericaSur):
    """Esta funcion devuelve la cantidad de usuarios latinoamericanos"""
    cantPaises = dict()
    # recorre la cantidad de diccionarios que hay
    for i in range(len(listaDic)):
        # una vez dentro de cada diccionario busca por clave los valores de los paises
        for j in listaAmericaSur:
            # Transformo a upper los dos valores por si estan escritos distintos
            if j.upper() == listaDic[i]["pais"].upper():
                if listaDic[i]["pais"] in cantPaises:
                    cantPaises[listaDic[i]["pais"]] = cantPaises[listaDic[i]["pais"]] +1
                else:
                    cantPaises[listaDic[i]["pais"]] = 1
    return cantPaises
    
paisesAmericaDelSur = ['Argentina', "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"]
us_datos = leer_datos('MOCK_DATA (1).csv')

for i, j in cantidad_latioamericanos(us_datos, paisesAmericaDelSur).items():
    print(i, j)
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

def cantidad_latioamericanos(listaDic):
    """Esta funcion devuelve una lista con la cantidad de ciudades que hay y los ordena alfabeticamente"""
    listaCiudades = []
    cantC = []
    #recorre la cantidad de usuarios dentro de la lista
    for i in range(len(listaDic)):
        #asigo el valor de cada pais a una variable
        pais = listaDic[i]["pais"]
        #comprueba si el pais ya esta en la lista que vamos a armar y agrega 1 a la cantidad 
        if pais not in listaCiudades:
            listaCiudades.append(pais)
            cantC.append(1)
        else:
            posicion = listaCiudades.index(pais)
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
        # el nombre del pais y apretando ctr + d para ver cuantas veces 
        # se selecciona
    return (listaCiudades, cantC, len(listaCiudades), len(cantC))
print(cantidad_latioamericanos(leer_datos('MOCK_DATA (1).csv')))
# %%