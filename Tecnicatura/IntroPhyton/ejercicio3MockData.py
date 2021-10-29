# %%
from typing import Type


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

def cantidad_nacidos(listaDic, mes):
    """Esta funcion devuelve la cantidad de usuarios nacidos en la fecha que le pasen como argumento"""
    cantidadNacidos = 0
    meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    # indica que numero de mes corresponde
    mesNum = meses.index(mes)
    print(mesNum, meses, mes)
    # recorre la cantidad de diccionarios que hay
    for i in listaDic:
        # transformo a int porque si no devuelve un str y nunca entra al if
        if int(i["fechanac"][3:5]) == mesNum:
            cantidadNacidos += 1
    return cantidadNacidos 

mes = input("ingrese el mes")
total = cantidad_nacidos(leer_datos("MOCK_DATA (1).csv"),mes)
print(f"la cantidad de nacidos en {mes} es de {total}")

# meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
# mesNum = meses.index("marzo")
# print(mesNum)
        
# %%
