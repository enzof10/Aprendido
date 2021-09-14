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
        #dentro de cada diccionario busco por clave los valores de los paises
        for j in listaAmericaSur:
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