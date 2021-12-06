# %%
# obtener Datos

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

mis_datos = leer_datos('clubes.csv')
# 1 - Crear una funcion que devuelva un diccionario cuyas claves sean
# los barrios a los que pertenecen lo clubes y su valor se la cantidad
# de los clubes que pertenecen a él.

def contador_barrios(clubes):
    barrios = {}
    for club in clubes:
            if (club["barrio"] in barrios):
                barrios[club["barrio"]] += 1
            else:
                barrios[club["barrio"]] = 1
    return barrios
print(contador_barrios(mis_datos))


# %%
# obtener Datos

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

mis_datos = leer_datos('clubes.csv')


def contador_cedes(clubes ,cantidadClubes):
    contador = 0
    listaClubes=[]
    while contador < cantidadClubes:
        if clubes[contador]["sede"].lower != "unica":
            listaClubes.append((clubes[contador]["nombre"],clubes[contador]["direccion"]))
            contador +=1
    print(listaClubes)

contador_cedes(mis_datos, 20)
# 2 - Crear una funcion que devuelva una lista con tuplas que contengan 
# los n primeros clubes (solo almacenar nombre y direccion) 
#cuya sede no sea UNICA. Tener en cuenta que para un optimo 
#funcionamiento del codigo hay no simpre se debe usar un ciclo for
#, puesto que implica usar una mala practica que es un break


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

mis_datos = leer_datos('clubes.csv')

def ordenar_por_id(diccionario):
    """"Recibe un diccionario que tenga claves de id y lo devuelve ordenado por sus valores"""

for diccionario in mis_datos:
    diccionario["id"]= int(diccionario["id"]) 

print(type(mis_datos[1]["id"]))
mis_datos.sort( key=lambda id:id["id"])
print(mis_datos)

# 3 - Escribir el codigo necesario que imprima los datos ordenados por id,
#tener en cuenta que el dato es numero pero esta guardado como string
#por ende para un orden correcto hay que convertirlo primero.



# %%
